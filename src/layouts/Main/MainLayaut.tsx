import React, { FC, PropsWithChildren } from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';
import FooterComponent from '../../components/footer/FooterComponent';

interface Props {};

const MainLayout: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>
    <HeaderComponent />
      <main>
        { children }
      </main>
    <FooterComponent />
  </>
);

export default MainLayout;