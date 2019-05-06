import {inject} from '@loopback/context';
import {AuthServiceBindings} from '../keys';
import {AuthService} from '../services';
import {post, requestBody} from '@loopback/rest';
import {logger} from '../helpers/logger';
import {User} from '../models';

export class AuthController {
  // TODO strong type the result
  // tslint:disable-next-line:no-any
  result: any;

  constructor(@inject(AuthServiceBindings.SERVICE)
              protected ethebeService: AuthService) {
  }

  @post('/api/authenticate')
  async login(@requestBody() user: User): Promise<string> {
    logger.debug(`REST request to log user in with username: ${user.username} and password: ${user.password}`);
    this.result = await this.ethebeService.login(user.username, user.password);
    logger.debug(`REST response: ${JSON.stringify(this.result)}`);
    return this.result;
  }
}
