import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {AddResponse, CalculatorParameters} from '../helpers';
import {logger} from '../helpers/logger';
import {CalculatorSoapService} from '../services';
import {CalculatorSoapServiceBindings} from '../keys';

export class CalculatorSoapController {
  // TODO strong type the result
  // tslint:disable-next-line:no-any
  response: any;

  constructor(
    @inject(CalculatorSoapServiceBindings.SERVICE)
    protected calculatorSoapService: CalculatorSoapService,
  ) {}

  @get('/add/{intA}/{intB}')
  async add(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<AddResponse> {
    // TODO add validations checks before submitting data
    logger.debug(`REST request to add 2 numbers: ${intA} and ${intB}`);
    this.response = await this.calculatorSoapService.add(<CalculatorParameters>{
      intA,
      intB,
    });
    logger.debug(`Result is: ${JSON.stringify(this.response.result)}`);
    return this.response.result;
  }
}
