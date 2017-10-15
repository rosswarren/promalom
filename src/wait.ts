import create from './create';

export default (timeout: number) =>
  create((resolve: any) => setTimeout(resolve, timeout));
