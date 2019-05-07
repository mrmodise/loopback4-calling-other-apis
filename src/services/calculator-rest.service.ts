import {inject, Provider} from '@loopback/context';
import {RestdsDataSource} from '../datasources';
import {getService} from '@loopback/service-proxy';

export interface CalculatorRestService {
  // TODO strongly type the return type
  // tslint:disable-next-line:no-any
  getAllPeople(): Promise<any[]>;
  // TODO strongly type the return type
  // tslint:disable-next-line:no-any
  getPerson(personId: string): Promise<any[]>;
}

export class CalculatorRestServiceProvider
  implements Provider<CalculatorRestService> {
  constructor(
    @inject('datasources.restds')
    protected dataSource: RestdsDataSource = new RestdsDataSource(),
  ) {}

  value(): Promise<CalculatorRestService> {
    return getService(this.dataSource);
  }
}
