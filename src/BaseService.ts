import { TestInterface } from '.';
import FormData from 'form-data';

export class Test {
  public readonly body?: object | FormData;
  public readonly query?: object;

  constructor({ body, query }: TestInterface) {
    this.body = body;
    this.query = query;
  }
}
