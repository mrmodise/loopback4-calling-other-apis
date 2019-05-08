import {Entity, model, property} from '@loopback/repository';

@model()
export class Api extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'array',
    itemType: 'any',
  })
    // tslint:disable-next-line:no-any
  items?: any[];


  constructor(data?: Partial<Api>) {
    super(data);
  }
}
