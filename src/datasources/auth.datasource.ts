import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './auth.datasource.json';

export class AuthDatasource extends juggler.DataSource {
  static dataSourceName = 'auth';

  constructor(
    @inject('datasources.config.auth', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
