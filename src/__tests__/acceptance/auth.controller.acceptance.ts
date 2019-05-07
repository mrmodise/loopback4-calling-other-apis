import {Client} from '@loopback/testlab';
import {CallingOtherApisApplication} from '../..';
import {setupApplication} from './test-helper';

describe('AuthController', () => {
  let app: CallingOtherApisApplication;
  // tslint:disable-next-line:no-unused
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });


  it('should log user in when /api/authenticate is invoked', async () => {
    // TODO write test for post method
  });
});
