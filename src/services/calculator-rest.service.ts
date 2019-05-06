import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {RestdsDataSource} from '../datasources';
import {AddResponse, CalculatorParameters, SubtractResponse} from '../helpers';

export interface CalculatorRestService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  add(args: CalculatorParameters): Promise<AddResponse>
  subtract(args: CalculatorParameters): Promise<SubtractResponse>
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
