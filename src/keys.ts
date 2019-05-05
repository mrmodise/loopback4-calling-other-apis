import {BindingKey} from '@loopback/context';
import {CalculatorService} from './services';

export namespace CalculatorServiceBindings {
  export const SERVICE = BindingKey.create<CalculatorService>(
    'services.CalculatorService',
  );
}
