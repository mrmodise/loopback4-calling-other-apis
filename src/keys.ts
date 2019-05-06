import {BindingKey} from '@loopback/context';
import {AuthService, CalculatorRestService, CalculatorSoapService} from './services';

export namespace CalculatorSoapServiceBindings {
  export const SERVICE = BindingKey.create<CalculatorSoapService>(
    'services.CalculatorSoapService',
  );
}

export namespace CalculatorRestServiceBindings {
  export const SERVICE = BindingKey.create<CalculatorRestService>(
    'services.CalculatorRestService',
  );
}

export namespace AuthServiceBindings {
  export const SERVICE = BindingKey.create<AuthService>(
    'services.AuthService',
  );
}
