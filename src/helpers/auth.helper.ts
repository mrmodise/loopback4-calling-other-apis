import {User} from '../models';

export interface AuthParamaters {
  username: User['username'];
  password: User['password'];
}
