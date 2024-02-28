import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav';
import s from './Nav/Nav.module.css';

const Layout = () => (
  <>
    <header className={s.header}>
      <Nav />
    </header>
    <div className={s.wrapper}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  </>
);

export default Layout;
