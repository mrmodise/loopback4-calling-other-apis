import {BindingKey} from '@loopback/context';
import {
  AuthServiceProvider,
  CalculatorRestServiceProvider,
  CalculatorSoapServiceProvider,
} from './services';

export namespace CalculatorSoapServiceBindings {
  export const SERVICE = BindingKey.create<CalculatorSoapServiceProvider>(
    'services.CalculatorSoapServiceProvider',
  );
}

export namespace CalculatorRestServiceBindings {
  export const SERVICE = BindingKey.create<CalculatorRestServiceProvider>(
    'services.CalculatorRestServiceProvider',
  );
}

export namespace AuthServiceBindings {
  export const SERVICE = BindingKey.create<AuthServiceProvider>(
    'services.AuthServiceProvider',
  );
}
