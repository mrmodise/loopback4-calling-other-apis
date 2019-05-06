import {BindingKey} from '@loopback/context';
import {CalculatorSoapService} from './services';

export namespace CalculatorSoapServiceBindings {
  export const SERVICE = BindingKey.create<CalculatorSoapService>(
    'services.CalculatorSoapService',
  );
}
