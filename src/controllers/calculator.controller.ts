import {inject} from '@loopback/context';
import {CalculatorSoapService, CalculatorParameters, AddResponse} from '../services';
import {get, param} from '@loopback/rest';
import {CalculatorSoapServiceBindings} from '../keys';

export class CalculatorController {
  constructor(@inject(CalculatorSoapServiceBindings.SERVICE)
              protected calculatorService: CalculatorSoapService,) {}

  @get('/add/{intA}/{intB}')
  async add(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<AddResponse> {
    return await this.calculatorService.add(<CalculatorParameters>{
      intA,
      intB,
    });
  }
}
