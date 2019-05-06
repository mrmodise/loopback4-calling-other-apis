import {inject} from '@loopback/context';
import {AuthServiceBindings} from '../keys';
import {AuthServiceProvider} from '../services';
import {post, requestBody} from '@loopback/rest';
import {logger} from '../helpers/logger';
import {User} from '../models';

// @ts-ignore
export class AuthController {
  // TODO strong type the result
  // tslint:disable-next-line:no-any
  response: any;

  constructor(
    @inject(AuthServiceBindings.SERVICE)
    protected ethebeService: AuthServiceProvider,
  ) {}

  @post('/api/authenticate')
  async login(@requestBody() user: User): Promise<string> {
    logger.debug(
      `REST request to log user in with username: ${
        user.username
      } and password: ${user.password}`,
    );
    this.response = await this.ethebeService.login(
      user.username,
      user.password,
    );
    logger.debug(`REST response: ${JSON.stringify(this.response.result)}`);
    return this.response.result;
  }
}
