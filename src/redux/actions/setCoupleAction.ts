import TAction from '../../abstractions/types/TAction';
import { SET_COUPLE } from '../actionNames';
import { TSetCouple } from '../actionTypes';

export type TSetCoupleAction = TAction<TSetCouple, string>

const setCoupleAction = (color: string): TSetCoupleAction => ({
  type: SET_COUPLE,
  payload: color
});

export default setCoupleAction;