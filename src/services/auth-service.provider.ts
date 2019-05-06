import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {AuthDatasource} from '../datasources';

export interface AuthServiceProvider {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  login(username: string, password: string): Promise<string>;
}

export class AuthServiceProvider implements Provider<AuthServiceProvider> {
  constructor(
    // ethebe must match the name property in the datasource json file
    @inject('datasources.auth')
    protected dataSource: AuthDatasource = new AuthDatasource(),
  ) {}

  value(): Promise<AuthServiceProvider> {
    return getService(this.dataSource);
  }
}
