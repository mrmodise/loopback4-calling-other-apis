import {Client, expect} from '@loopback/testlab';
import {CallingOtherApisApplication} from '../..';
import {setupApplication} from './test-helper';

describe('CalculatorController', () => {
  let app: CallingOtherApisApplication;
  let client: Client;
  const numb = 10;
  const numb2 = 10;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('adds 2 numbers when GET /add is invoked', async () => {
    const res = await client
      .get(`/add/${numb}/${numb2}`)
      .expect(200);
    expect(res.body).to.containEql({greeting: 'result'});
  });
});
