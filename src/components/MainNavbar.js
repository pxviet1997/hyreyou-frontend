import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
    sx={{
      paddingLeft: 0

    }}
  >
    <Toolbar
      sx={{
        height: 64,
      }}
      style={{
        paddingLeft: 0
      }}

    >
      <RouterLink to="/">
        <Logo />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
