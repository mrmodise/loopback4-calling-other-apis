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

  it('should add two numbers when GET /add/{intA}/{intB} is invoked', async () => {
    const res = await client.get(`/add/${numb}/${numb2}`).expect(200);
    expect(res.body).to.containEql({value: 20});
  });

  it('should return one person record when /api/people/{personId} is invoked', async () => {
    const res = await client.get(`/api/people/${numb}`).expect(200);
    expect(res.body.name).to.eql('Obi-Wan Kenobi');
  });

  it('should return all people records when /api/people is invoked', async () => {
    const res = await client.get(`/api/people`).expect(200);
    expect(res.body.count).to.eql(87);
  });
});
