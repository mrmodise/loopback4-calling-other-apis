import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {AuthDataSource} from '../datasources';

export interface AuthService {
  // tslint:disable-next-line:no-any
  login(username: string, password: string): Promise<any>;
}

export class AuthServiceProvider implements Provider<AuthService> {
  constructor(
    @inject('datasources.auth')
    protected dataSource: AuthDataSource = new AuthDataSource(),
  ) {}

  value(): Promise<AuthService> {
    return getService(this.dataSource);
  }
}
