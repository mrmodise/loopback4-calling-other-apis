import {CalculatorSoapService, CalculatorSoapServiceProvider} from '../../services';
import {DsDataSource} from '../../datasources';
import {merge} from 'lodash';
import * as CALCULATOR_CONFIG from '../../datasources/ds.datasource.json';
import {CalculatorSoapController} from '../calculator-soap.controller';
import {expect} from '@loopback/testlab';

describe('CalculatorSoapController (unit)', async () => {
  let servicePromise: Promise<CalculatorSoapService>;
  let service: CalculatorSoapService;

  const givenCalculatorSoapService = () => {
    const config = merge({}, CALCULATOR_CONFIG, {});
    const dataSource = new DsDataSource(config);
    servicePromise = new CalculatorSoapServiceProvider(dataSource).value();
  };

  before(givenCalculatorSoapService);

  beforeEach(async () => {
    await servicePromise.then(async (svc) => {
      service = svc;
    });
  });

  describe('add(intA, intB)', async () => {
    it('adds two numbers when present', async () => {
      const controller = new CalculatorSoapController(service);
      const add = await controller.add(100, 23);
      expect(add.value).to.equal(123);
    });
  });

  describe('subtract(intA, intB)', async () => {
    it('subtract two numbers when present', async () => {
      const controller = new CalculatorSoapController(service);
      const add = await controller.subtract(100, 23);
      expect(add.value).to.equal(77);
    });
  });

  describe('divide(intA, intB)', async () => {
    it('divides two numbers when present', async () => {
      const controller = new CalculatorSoapController(service);
      const add = await controller.divide(100, 23);
      expect(add.value).to.equal(4);
    });
  });
});
