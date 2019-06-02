import {BindingKey} from '@loopback/context';
import {
  AuthService,
  CalculatorSoapService,
} from './services';

export namespace CalculatorSoapServiceBindings {
  export const SERVICE = BindingKey.create<CalculatorSoapService>(
    'services.CalculatorSoapService',
  );
}

export namespace AuthServiceBindings {
  export const SERVICE = BindingKey.create<AuthService>('services.AuthService');
}
