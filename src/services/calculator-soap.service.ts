import {AddResponse, CalculatorParameters, SubtractResponse} from '../helpers';
import {inject, Provider} from '@loopback/context';
import {DsDataSource} from '../datasources';
import {getService} from '@loopback/service-proxy';

export interface CalculatorSoapService {
  add(args: CalculatorParameters): Promise<AddResponse>;
  subtract(args: CalculatorParameters): Promise<SubtractResponse>;
}

export class CalculatorSoapServiceProvider
  implements Provider<CalculatorSoapService> {
  constructor(
    @inject('datasources.ds')
    protected dataSource: DsDataSource = new DsDataSource(),
  ) {}

  value(): Promise<CalculatorSoapService> {
    return getService(this.dataSource);
  }
}
