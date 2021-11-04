import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { experimentalStyled } from '@material-ui/core';
import MainNavbar from './MainNavbar';
import { useEffect, useState } from 'react';

const MainLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const MainLayoutWrapper = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const MainLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const MainLayout = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const userType = JSON.parse(localStorage.getItem('userType'));

  if (token) {
    return userType === 'Talent'
      ? <Navigate to="/talent" />
      : <Navigate to="/business" />;
  }
  return (
    <MainLayoutRoot>
      <MainNavbar />
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>
            <Outlet />
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  );
};

export default MainLayout;
