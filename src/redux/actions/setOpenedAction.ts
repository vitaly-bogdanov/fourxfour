import TAction from '../../abstractions/types/TAction';
import { SET_OPEN } from '../actionNames';
import { TSetOpen } from '../actionTypes';

export type TSetOpenedAction = TAction<TSetOpen, number>

const setOpenedAction = (index: number): TSetOpenedAction => ({
  type: SET_OPEN,
  payload: index
});

export default setOpenedAction;