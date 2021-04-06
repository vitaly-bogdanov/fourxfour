import React, { FC, MouseEvent } from 'react';
import { connect } from 'react-redux';
import MainLayout from './layouts/Main/MainLayaut';
import Container from '@material-ui/core/Container';
import BoardComponent from './components/board/BoardComponent';
import TRootState from './abstractions/types/TRootState';
import resetColorsAction from './redux/actions/resetColorsAction';
import classes from './App.module.scss';
import { Dispatch } from 'redux';

interface IMapStateToProps {
  level: number
}

interface IMapDispatchToProps {
  reset(): void
}

interface Props extends IMapStateToProps, IMapDispatchToProps {}

const App: FC<Props> = props => {
  const repeat = (event: MouseEvent<HTMLSpanElement>) => {
    props.reset()
  };

  return (
    <MainLayout>
      <section>
        <Container maxWidth="md">
          <h2 className={classes.titleText}>Level: {props.level} {props.level === 8 && <p>YOU WIN! <span onClick={repeat} className={classes.repeat}>CLICK FOR RESET</span></p>} </h2>
        </Container>
      </section>
      <section>
        <Container maxWidth="md">
          <BoardComponent />
        </Container>
      </section>
    </MainLayout>
  )
};

const mapStateToProps = (state: TRootState): IMapStateToProps => ({
  level: state.board.level
});

const mapDispatchToProps = (dispatch:  Dispatch): IMapDispatchToProps => ({
  reset: () => dispatch(resetColorsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);