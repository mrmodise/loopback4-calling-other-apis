import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {AddResponse, CalculatorParameters} from '../helpers';
import {logger} from '../helpers/logger';
import {CalculatorRestService, CalculatorSoapService} from '../services';
import {
  CalculatorRestServiceBindings,
  CalculatorSoapServiceBindings,
} from '../keys';

export class CalculatorController {
  // TODO strong type the result
  // tslint:disable-next-line:no-any
  response: any;

  constructor(
    @inject(CalculatorRestServiceBindings.SERVICE)
    protected calculatorRestService: CalculatorRestService,
    @inject(CalculatorSoapServiceBindings.SERVICE)
    protected calculatorSoapService: CalculatorSoapService,
  ) {}

  @get('/add/{intA}/{intB}')
  async add(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<AddResponse> {
    // TODO add validations checks before submitting data
    logger.debug(`REST request to add 2 numbers: ${intA} and ${intB}`);
    this.response = await this.calculatorSoapService.add(<CalculatorParameters>{
      intA,
      intB,
    });
    logger.debug(`Result is: ${JSON.stringify(this.response.result)}`);
    return this.response.result;
  }

  // TODO strongly type the response
  @get('api/people')
  async getAllPeople() {
    logger.debug('REST request for all People');
    this.response = await this.calculatorRestService.getAllPeople();
    logger.debug(`REST result count: ${JSON.stringify(this.response.count)}`);
    return this.response;
  }

  // TODO strongly type the response
  @get('/api/people/{personId}')
  async getPerson(@param.path.string('personId') personId: string) {
    logger.debug(`REST request for 1 person: ${personId}`);
    this.response = await this.calculatorRestService.getPerson(personId);
    logger.debug(`REST result: ${JSON.stringify(this.response.name)}`);
    return this.response;
  }
}
