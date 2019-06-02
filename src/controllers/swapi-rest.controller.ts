import {inject} from '@loopback/context';
import {get, param, post} from '@loopback/rest';
import {logger} from '../helpers/logger';
import {SwapiRestService} from '../services';
import {repository} from '@loopback/repository';
import {ApiRepository} from '../repositories';
import {Api} from '../models';

export class SwapiRestController {
  // TODO strong type the result
  // tslint:disable-next-line:no-any
  response: any;

  constructor(
    @inject('services.SwapiRestService')
    protected swapiRestService: SwapiRestService,
    @repository(ApiRepository)
    protected apiRepository: ApiRepository,
  ) {
  }

  // TODO strongly type the response
  @get('api/people')
  async getAllPeople() {
    logger.debug('REST request for all People');
    this.response = await this.swapiRestService.getAllPeople();
    logger.debug(`REST result count: ${JSON.stringify(this.response.count)}`);
    return this.response;
  }

  // TODO strongly type the response
  @get('/api/people/{personId}')
  async getPerson(@param.path.string('personId') personId: string) {

    let api: Api = new Api();
    api.id = personId;

    await logger.debug(`REST request for 1 person: ${api.id}`);

    // retrieve cached copy of the results
    const result = await this.apiRepository.get(api.id);
    await logger.debug(`REST cached result: ${JSON.stringify(result)}`);

    // no copy exists
    if (await result === null) {
      // make an API call for new data
      this.response = await this.swapiRestService.getPerson(api.id);
      await logger.debug(`REST uncached result: ${JSON.stringify(this.response)}`);
      // tslint:disable-next-line:no-unused-expression
      api.items = this.response;
      // cache data
      await this.apiRepository.set(api.id, api);
    }
    return this.response;
  }

  @post('/api/people/{personId}')
  async remove(@param.path.string('personId') personId: string) {
    const res = await this.apiRepository.delete(personId);
    await logger.debug(`REST request to delete user ${personId} from cache: ${JSON.stringify(res)}`);
  }
}
