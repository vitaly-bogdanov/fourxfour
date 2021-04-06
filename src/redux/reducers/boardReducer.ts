import TBoardState from '../../abstractions/types/TBoardState';
import randomArrayColorsHelper from '../../helpers/randomArrayColorsHelper';
import {
  SET_COUPLE,
  SET_OPEN,
  RESET_COLORS 
} from '../actionNames';

const initialState: TBoardState = {
  colors: randomArrayColorsHelper(),
  level: 0
};

const boardReducer = (state: TBoardState = initialState, action: any) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        colors: state.colors.map((tile, index) => {
          if (action.payload === index) {
            tile.open = true;
          }
          return tile;
        })
      }
    case SET_COUPLE:
      console.log(state.level);
      return {
        level: state.level + 1,
        colors: state.colors.map((tile) => {
          if (action.payload === tile.color) {
            tile.couple = true;
          }
          return tile;
        })
      }
    case RESET_COLORS:
      return {
        colors: randomArrayColorsHelper(),
        level: 0
      }
    default:
      return state;
  }
}

export default boardReducer;