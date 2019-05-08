import {DefaultKeyValueRepository, juggler} from '@loopback/repository';
import {Api} from '../models';
import {RedisDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ApiRepository extends DefaultKeyValueRepository<
  Api
> {
  constructor(
    @inject('datasources.redis') dataSource: RedisDataSource,
  ) {
    super(Api, dataSource);
  }
}
