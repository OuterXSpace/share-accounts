import { TestState } from '../store-tookit/test-redux/slice';
import { CartState } from '../store-tookit';

export interface RootState {
  test?: TestState;
  cart?: CartState;
}
