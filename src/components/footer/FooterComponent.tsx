import React, { FC } from 'react';
import classes from './FooterComponent.module.scss';
import Container from '@material-ui/core/Container';

const FooterComponent: FC = () => (
  <footer className={classes.footerPanel}>
    <Container maxWidth="md">
      <span>fourXfour</span>
    </Container>
  </footer>
);

export default FooterComponent;