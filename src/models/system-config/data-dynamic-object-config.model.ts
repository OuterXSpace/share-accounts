export interface DataDynamicObject {
  [key: string]: Record<string, any> | Record<string, any>[] | string | boolean | number;
}
