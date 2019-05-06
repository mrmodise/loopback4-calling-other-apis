import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {AuthDatasource} from '../datasources';

export interface AuthService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  login(username: string, password: string): Promise<string>;
}

export class AuthServiceProvider implements Provider<AuthService> {
  constructor(
    // ethebe must match the name property in the datasource json file
    @inject('datasources.auth')
    protected dataSource: AuthDatasource = new AuthDatasource(),
  ) {
  }

  value(): Promise<AuthService> {
    return getService(this.dataSource);
  }
}
