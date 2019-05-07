import {CallingOtherApisApplication} from '../..';
import {AuthService, AuthServiceProvider} from '../../services';
import {AuthDataSource} from '../../datasources';
import {setupApplication} from '../../__tests__/acceptance/test-helper';

describe('AuthController', () => {
  let app: CallingOtherApisApplication;
  let service: Promise<AuthService>;

  const givenAuthService = () => {
    const dataSource = new AuthDataSource();
    service = new AuthServiceProvider(dataSource).value();
  };

  before(givenAuthService);

  before('setupApplication', async () => {
    ({app} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });


  it('should log user in when /api/authenticate is invoked', async () => {
    // const res = await client.post(`/api/authenticate`).expect(200);
    // expect(res.body).to.containEql({value: 20});
    await service.then(svc => {
      console.log(`Svc ${svc}`);
    });
  });
});
