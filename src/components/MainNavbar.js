import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AppBar, Toolbar,
} from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => {
  const { userType } = useSelector((state) => state.shared);

  let logoPath = '/';

  if (userType === 'Talent') {
    logoPath = '/talent';
  } else {
    logoPath = '/business';
  }

  return (
    <AppBar
      elevation={0}
      {...props}
      sx={{ paddingLeft: 0 }}
    >
      <Toolbar
        sx={{ height: 64 }}
        style={{ paddingLeft: 0 }}
      >
        <RouterLink to={logoPath}>
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
