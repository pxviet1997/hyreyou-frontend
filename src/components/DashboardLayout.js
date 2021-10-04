import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, experimentalStyled } from '@material-ui/core';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = experimentalStyled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const { user } = useSelector((state) => state.shared);
  const token = JSON.parse(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  if (!token) {
    return <Navigate to="/" />;
  }

  useEffect(async () => {
    if (!user) return;
    console.log(user);
    setLoading(false);
  }, [user]);

  return (
    <DashboardLayoutRoot>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      {loading
        ? (
          <Box
            sx={{
              minHeight: '100%',
              minWidth: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </Box>)
        : (
          <>
            <DashboardSidebar
              onMobileClose={() => setMobileNavOpen(false)}
              openMobile={isMobileNavOpen}
            />
            <DashboardLayoutWrapper>
              <DashboardLayoutContainer>
                <DashboardLayoutContent>
                  <Outlet />
                </DashboardLayoutContent>
              </DashboardLayoutContainer>
            </DashboardLayoutWrapper>
          </>
        )}
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
