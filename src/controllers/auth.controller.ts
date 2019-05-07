import {inject} from '@loopback/context';
import {post, requestBody} from '@loopback/rest';
import {logger} from '../helpers/logger';
import {User} from '../models';
import {AuthService} from '../services';
import {AuthServiceBindings} from '../keys';

export class AuthController {
  // TODO strong type the result
  // tslint:disable-next-line:no-any
  response: any;

  constructor(
    @inject(AuthServiceBindings.SERVICE)
    protected authService: AuthService,
  ) {}

  @post('/api/authenticate')
  async login(@requestBody() user: User): Promise<string> {
    logger.debug(
      `REST request to log user in with username: ${
        user.username
      } and password: ${user.password}`,
    );
    this.response = await this.authService.login(user.username, user.password);
    logger.debug(`REST response: ${JSON.stringify(this.response)}`);
    return this.response;
  }
}
