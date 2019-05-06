import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {RestdsDataSource} from '../datasources';

export interface CalculatorRestService {
  // this is where you define the Node.js methods that will be
  // mapped to the REST operations as stated in the datasource
  // json file.
  // TODO strongly type the return type
  // tslint:disable-next-line:no-any
  getAllPeople(): Promise<any[]>;
  // TODO strongly type the return type
  // tslint:disable-next-line:no-any
  getPerson(personId: string): Promise<any[]>;
}

export class CalculatorRestServiceProvider implements Provider<CalculatorRestService> {
  constructor(
    // restds must match the name property in the datasource json file
    @inject('datasources.restds')
    protected dataSource: RestdsDataSource = new RestdsDataSource(),
  ) {}

  value(): Promise<CalculatorRestService> {
    return getService(this.dataSource);
  }
}
