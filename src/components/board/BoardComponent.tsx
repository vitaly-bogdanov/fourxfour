import React, { FC, useState, MouseEvent } from 'react';
import TileComponent from '../tile/TileComponent';
import classes from './BoardComponent.module.scss';
import { connect } from 'react-redux';
import TTile from '../../abstractions/types/TTile';
import TRootState from '../../abstractions/types/TRootState';
import Button from '@material-ui/core/Button';

interface IMapStateToProps { tiles: TTile[] };
interface Props extends IMapStateToProps {};

const BoardComponent: FC<Props> = props => {
  const [viewColor, toggleViewColor] = useState<boolean>(false);

  const viewColorHendler = (event: MouseEvent<HTMLButtonElement>): void => {
    toggleViewColor((prev) => !prev);
  };

  return (
    <>
      <Button
        variant="contained" 
        color={viewColor ? "secondary" : "primary"}
        onClick={viewColorHendler}
        className={classes.button}
      >
        Подсказка
      </Button>
      <div className={classes.board}>
        { props.tiles.map((tile: TTile, index: number) => <TileComponent viewColor={viewColor} key={`${tile.color}-${index}`} colorIndex={index} />) }
      </div>
    </>
  );
};

const mapStateToProps = (state: TRootState): IMapStateToProps => ({
  tiles: state.board.colors
});

export default connect(mapStateToProps)(BoardComponent);