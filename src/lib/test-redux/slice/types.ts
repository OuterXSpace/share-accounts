export interface TestState {
  loading: boolean;
  data: Record<string, any>;
}

export interface IFieldValue {
  field: string;
  value: any;
}

export type ContainerState = TestState;
