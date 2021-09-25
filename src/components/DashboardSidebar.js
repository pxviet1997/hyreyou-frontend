/* eslint-disable no-alert */
/* eslint-disable operator-linebreak */
import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import API from 'src/services';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  LogOut as LogOutIcon
} from 'react-feather';
import NavItem from './NavItem';
import { getTalentProfileData } from './talent/Profile/ProfileDetails';
import { getBusinessProfileData } from './profile/BusinessProfileDetails';

const user = {
  avatar: '/static/images/avatars/avatar_7.png',
  jobTitle: 'Senior Developer',
  name: 'John Doe'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/business-profile',
    icon: UserPlusIcon,
    title: 'Profile'
  },
  {
    href: '/app/role',
    icon: UserPlusIcon,
    title: 'Role'
  },
  {
    href: '/app/short-list',
    icon: UserPlusIcon,
    title: 'Short List'
  },
  {
    href: '/app/interview',
    icon: UserPlusIcon,
    title: 'Interview'
  }
  // {
  //   href: '/app/customers',
  //   icon: UsersIcon,
  //   title: 'Customers'
  // },
  // {
  //   href: '/app/products',
  //   icon: ShoppingBagIcon,
  //   title: 'Products'
  // },
  // {
  //   href: '/app/account',
  //   icon: UserIcon,
  //   title: 'Account'
  // },
  // {
  //   href: '/app/settings',
  //   icon: SettingsIcon,
  //   title: 'Settings'
  // },
  // {
  //   href: '/login',
  //   icon: LockIcon,
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: UserPlusIcon,
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: AlertCircleIcon,
  //   title: 'Error'
  // }
];

const talentItems = [
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
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const avatarRef = useRef();
  const talentType = window.location.pathname.includes('talent'); // TODO: either we do better or can change this logged in user type, either Talent or Business;

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileChanged, setFileChanged] = useState(false);
  const [uploading, setUploading] = useState(false);

  const userType = talentType ? 'Talent' : 'Business';

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const buf = (TYPED_ARRAY) => {
    return TYPED_ARRAY.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, '');
  };

  const getTalentProfile = async () => {
    try {
      const data = await getTalentProfileData(); // TODO: pass the logged in user id as the parameter

      if (!data) {
        return;
      }

      const { profilePhoto } = data;
      let base64String;
      let TYPED_ARRAY;
      let STRING_CHAR;

      if (profilePhoto && profilePhoto.data && profilePhoto.data.data) {
        const arrayBuffer = profilePhoto.data.data;

        TYPED_ARRAY = new Uint8Array(arrayBuffer);

        STRING_CHAR = buf(TYPED_ARRAY);

        base64String = btoa(STRING_CHAR);
      }

      setSelectedFile({
        preview: `data:image/png;base64,${base64String}`
      });
    } catch (e) {
      alert(`sidebar error ${e}`);
    }
  };

  const getBusinessProfile = async () => {
    try {
      const data = await getBusinessProfileData(); // TODO: pass the logged in user id as the parameter

      if (!data) {
        return;
      }

      const { profilePhoto } = data;
      let base64String;
      let TYPED_ARRAY;
      let STRING_CHAR;

      if (profilePhoto && profilePhoto.data && profilePhoto.data.data) {
        const arrayBuffer = profilePhoto.data.data;

        TYPED_ARRAY = new Uint8Array(arrayBuffer);

        STRING_CHAR = buf(TYPED_ARRAY);

        base64String = btoa(STRING_CHAR);
      }

      setSelectedFile({
        preview: `data:image/png;base64,${base64String}`
      });
    } catch (e) {
      alert(`sidebar error ${e}`);
    }
  };

  useEffect(() => {
    if (userType === 'Talent') {
      getTalentProfile();
    } else {
      getBusinessProfile();
    }
  }, [userType]);

  const uploadHandler = async () => {
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('_id', '6138a8cc35389921daef2627'); // FIXME: change this to logged in user id
      formData.append('Type', userType);
      formData.append('profilePhoto', selectedFile.raw, selectedFile.raw.name);

      await API.post('/updateImage/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent.loaded / progressEvent.total);
        }
      });
      setUploading(false);
      setFileChanged(false);
    } catch (error) {
      setUploading(false);
      alert(error);
    }
  };

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    console.log({ file });
    setSelectedFile({
      raw: file,
      preview: URL.createObjectURL(file)
    });
    setFileChanged(true);

    // uploadHandler(file);
  };

  const sideBarItems = userType === 'Talent' ? talentItems : items;

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
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="file-upload">
          <Avatar
            for="file-upload"
            className="custom-file-upload"
            // component={RouterLink}
            src={selectedFile && selectedFile.preview}
            sx={{
              cursor: 'pointer',
              width: 64,
              height: 64
            }}
            //   to="/app/business-profile"
          />
        </label>

        {fileChanged && (
          <Typography
            onClick={fileChanged && !uploading ? () => uploadHandler() : null}
            color="textPrimary"
            variant="caption"
            align="center"
            sx={{
              p: 1
            }}
            style={
              !uploading
                ? { textDecoration: 'underline', cursor: 'pointer' }
                : {}
            }
          >
            {uploading ? 'Uploading, Please Wait' : 'Upload'}
          </Typography>
        )}

        <input
          ref={avatarRef}
          accept="image/*"
          id="file-upload"
          type="file"
          name="profilePhoto"
          className="form-control"
          onChange={fileChangedHandler}
          style={{ display: 'none' }}
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
        {/* <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography> */}
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {sideBarItems.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>

        <List style={{ marginTop: 'auto' }}>
          <NavItem href="/login" title="Logout" icon={LogOutIcon} />
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      {/* <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2
        }}
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Need more?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to PRO version and access 20 more screens
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box>
      </Box> */}
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
  onMobileClose: () => {},
  openMobile: false
};

export default DashboardSidebar;
