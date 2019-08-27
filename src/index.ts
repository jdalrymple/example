import FormData from 'form-data';

export interface TestInterface {
  body?: object | FormData;
  query?: object;
}
