import React, { FC, MouseEvent, useMemo } from 'react';
import classes from './TileComponent.module.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TTile from '../../abstractions/types/TTile';
import TRootState from '../../abstractions/types/TRootState';
import setOpenedAction from '../../redux/actions/setOpenedAction';
import setCoupleAction from '../../redux/actions/setCoupleAction';
import resetColorsAction from '../../redux/actions/resetColorsAction';


interface IMapStateToProps {
  colors: TTile[]
}

interface IMapDispatchToProps {
  setOpened(index: number): void,
  setCouple(color: string): void,
  resetColors(): void
}

interface Props extends IMapStateToProps, IMapDispatchToProps {
  colorIndex: number,
  viewColor: boolean
}

const TileComponent: FC<Props> = props => {
  const tile = props.colors[props.colorIndex];
  let style = { backgroundColor: '#3f51b5' }
  if (tile.open) style = { backgroundColor: tile.color };

  const check = (event: MouseEvent<HTMLDivElement>): void => {
    if (tile.open) return; // при нажатии на уже открытую ячейку
    props.setOpened(props.colorIndex); // .. открываем ячейку по индексу
    // ищем все открытые ячейки и если их 2, то ссверяем их цвета, и в заависимости от этого принимаем решение: составить пару или нет
    const ponenialTileCouple = props.colors.filter((tile) => {
      return tile.open && !tile.couple; // ячейка открыта, но без пары
    });
    if (ponenialTileCouple.length === 2) {
      if (ponenialTileCouple[0].color === ponenialTileCouple[1].color) {
        props.setCouple(ponenialTileCouple[0].color); // установливаем пару
      } else {
        console.log('не попал');
        setTimeout(() => {
          props.resetColors();
        }, 600); // сбрасываем счет
      } 
    }
  };

  return (
    <div style={style} className={classes.tile} onClick={check}>
      { props.viewColor && (<div className={classes.viewColor} style={{backgroundColor: tile.color}}></div>) }
    </div>
  );
}

const MapStateToProps = (state: TRootState): IMapStateToProps => ({
  colors: state.board.colors
});

const MapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  setOpened: (index: number) => dispatch(setOpenedAction(index)),
  setCouple: (color: string) => dispatch(setCoupleAction(color)),
  resetColors: () => dispatch(resetColorsAction())
});

export default connect(MapStateToProps,  MapDispatchToProps)(TileComponent);