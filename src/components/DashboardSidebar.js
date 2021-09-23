import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'src/redux/actions/authAction';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  LogOut as LogOutIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_7.png',
  jobTitle: 'Senior Developer',
  name: 'John Doe'
};

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  // const { userType } = useSelector((state) => state.auth);
  const { userType } = useSelector((state) => state.shared);

  const dispatch = useDispatch();

  const items = userType === 'Talent'
    ? [
      {
        href: '/talent/dashboard',
        icon: BarChartIcon,
        title: 'Dashboard'
      },
      {
        href: '/talent/profile',
        icon: BarChartIcon,
        title: 'Profile'
      },
      {
        href: '/talent/payment-info',
        icon: BarChartIcon,
        title: 'Payment Information'
      },
      {
        href: '/talent/activity',
        icon: BarChartIcon,
        title: 'Activity'
      }
    ]
    : [
      {
        href: '/business/dashboard',
        icon: BarChartIcon,
        title: 'Dashboard'
      },
      {
        href: '/business/business-profile',
        icon: UserPlusIcon,
        title: 'Profile'
      },
      {
        href: '/business/role',
        icon: UserPlusIcon,
        title: 'Role'
      },
      {
        href: '/business/short-list',
        icon: UserPlusIcon,
        title: 'Short List'
      },
      {
        href: '/business/interview',
        icon: UserPlusIcon,
        title: 'Interview'
      }
    ];

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const onLogoutClick = () => {
    dispatch(logOut());
  };

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/business/business-profile"
        />
        <Typography
          color="textPrimary"
          variant="h5"
          sx={{
            p: 2
          }}
        >
          {user.name}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>

        <List style={{ marginTop: 'auto' }}>
          <NavItem href="/" title="Logout" icon={LogOutIcon} onClick={onLogoutClick} />
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
