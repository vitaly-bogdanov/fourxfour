import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classes from './HeaderComponent.module.scss';
import Container from '@material-ui/core/Container';

const HeaderComponent: FC = () => (
  <AppBar position="static">
    <Container maxWidth="md">
      <Toolbar>
        <h1 className={classes.headerTitle}>Board of tiles game</h1>
      </Toolbar>
    </Container>
  </AppBar>
);

export default HeaderComponent;