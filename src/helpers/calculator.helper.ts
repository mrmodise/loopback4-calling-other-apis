export interface AddResponse {
  result: {
    value: number;
  };

  value: object;
}

export interface SubtractResponse {
  result: {
    value: number;
  };
}

export interface CalculatorParameters {
  intA: number;
  intB: number;
}
