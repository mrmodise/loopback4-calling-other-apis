import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {DsDataSource} from '../datasources';
import {CalculatorParameters, SubtractResponse} from '../helpers';
import {AddResponse} from '../helpers';

export interface CalculatorSoapServiceProvider {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  add(args: CalculatorParameters): Promise<AddResponse>;
  subtract(args: CalculatorParameters): Promise<SubtractResponse>;
}

export class CalculatorSoapServiceProvider
  implements Provider<CalculatorSoapServiceProvider> {
  constructor(
    // ds must match the name property in the datasource json file
    @inject('datasources.ds')
    protected dataSource: DsDataSource = new DsDataSource(),
  ) {}

  value(): Promise<CalculatorSoapServiceProvider> {
    return getService(this.dataSource);
  }
}
