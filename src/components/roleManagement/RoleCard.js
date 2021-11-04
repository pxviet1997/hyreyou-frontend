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
import RoleList from './RoleList';
import AddRoleModal from './modal/AddRoleModal';
import { useSelector } from 'react-redux';

const RoleCard = () => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { user, error, message } = useSelector((state) => state.shared);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <Card>
      <Box px={4}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={8} display="flex" justify="center">
            <CardHeader title="Role Management" />
          </Grid>
          <Grid item md={6} xs={4} display="flex" justifyContent="flex-end">
            <div
              style={{
                padding: 16,
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Button variant="contained" onClick={handleOpen}>
                Create Role
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <AddRoleModal open={open} setOpen={setOpen} setOpenAlert={setOpenAlert} userId={user._id} />
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
export default RoleCard;
