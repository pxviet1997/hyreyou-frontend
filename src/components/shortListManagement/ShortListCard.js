/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  Snackbar,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import RoleList from './RoleList';

const ShortListCard = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const { user, error, message } = useSelector((state) => state.shared);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <Card>
      <Box px={4}>
        <CardHeader title="Short List Management" />
      </Box>
      <Divider />
      <RoleList />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </Card>
  );
};
export default ShortListCard;
