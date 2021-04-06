import TAction from '../../abstractions/types/TAction';
import { RESET_COLORS } from '../actionNames';
import { TResetColors } from '../actionTypes';

export type TResetColorsAction = TAction<TResetColors, null>;  

const resetColorsAction = (): TResetColorsAction => ({
  type: RESET_COLORS,
  payload: null
});

export default resetColorsAction;