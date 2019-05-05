// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {CalculatorService, CalculatorParameters, AddResponse} from '../services';
import {get, param} from '@loopback/rest';
import {CalculatorServiceBindings} from '../keys';

export class CalculatorController {
  constructor(@inject(CalculatorServiceBindings.SERVICE)
              protected calculatorService: CalculatorService,) {}

  @get('/add/{intA}/{intB}')
  async add(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<AddResponse> {
    //Preconditions

    return await this.calculatorService.add(<CalculatorParameters>{
      intA,
      intB,
    });
  }
}
