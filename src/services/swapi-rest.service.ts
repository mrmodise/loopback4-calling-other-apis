import {inject, Provider} from '@loopback/context';
import {RestdsDataSource} from '../datasources';
import {getService} from '@loopback/service-proxy';

export interface SwapiRestService {
  // TODO strongly type the return type
  // tslint:disable-next-line:no-any
  getAllPeople(): Promise<any[]>;
  // TODO strongly type the return type
  // tslint:disable-next-line:no-any
  getPerson(personId: string): Promise<any[]>;
}

export class SwapiRestServiceProvider
  implements Provider<SwapiRestService> {
  constructor(
    @inject('datasources.restds')
    protected dataSource: RestdsDataSource = new RestdsDataSource(),
  ) {}

  value(): Promise<SwapiRestService> {
    return getService(this.dataSource);
  }
}
