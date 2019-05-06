import {inject} from '@loopback/context';
import {CalculatorRestService, CalculatorSoapService} from '../services';
import {get, param} from '@loopback/rest';
import {CalculatorRestServiceBindings, CalculatorSoapServiceBindings} from '../keys';
import {AddResponse, CalculatorParameters} from '../helpers';
import {logger} from '../helpers/logger';

export class CalculatorController {
  // TODO strong type the result
  // tslint:disable-next-line:no-any
  result: any;

  constructor(@inject(CalculatorSoapServiceBindings.SERVICE)
              protected calculatorSoapService: CalculatorSoapService,
              @inject(CalculatorRestServiceBindings.SERVICE)
              protected calculatorRestService: CalculatorRestService,) {}

  @get('/add/{intA}/{intB}')
  async add(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<AddResponse> {
    // TODO add validations checks before submitting data
    logger.debug(`REST request to add 2 numbers: ${intA} and ${intB}`);
     this.result =  await this.calculatorSoapService.add(<CalculatorParameters>{
      intA,
      intB,
    });
    logger.debug(`Result is: ${JSON.stringify(this.result)}`);
    return this.result;
  }

  // TODO strongly type the response
  @get('api/people')
  async getAllPeople() {
    logger.debug('REST request for all People');
    this.result = await this.calculatorRestService.getAllPeople();
    logger.debug(`REST result: ${JSON.stringify(this.result)}`);
    return this.result;
  }
  // TODO strongly type the response
  @get('/api/people/{personId}')
  async getPerson(@param.path.string('personId') personId: string) {
    logger.debug(`REST request for 1 person: ${personId}`);
    this.result = await this.calculatorRestService.getPerson(personId);
    logger.debug(`REST result: ${JSON.stringify(this.result)}`);
    return this.result;
  }
}
