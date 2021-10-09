/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
} from '@material-ui/core';
import AddRole from './AddRole';
import RoleList from './RoleList';

const RoleCardDetails = () => {
  const [isCreatingRole, setisCreatingRole] = useState(false);
  const [isShowRole, setIsShowRole] = useState(true);

  const handleOpen = () => {
    setisCreatingRole(!isCreatingRole);
    setIsShowRole(!isShowRole);
  };

  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item md={6} xs={8}>
          <CardHeader title="Role Management" />
        </Grid>
        <Grid item md={6} xs={4}>
          <div
            style={{
              padding: 16,
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button variant="outlined" onClick={handleOpen}>
              Create Role
            </Button>
          </div>
        </Grid>
      </Grid>
      <Divider />
      {isCreatingRole
        ? <AddRole setisCreatingRole={setisCreatingRole} />
        : <RoleList />
      }
    </Card>
  );
};
export default RoleCardDetails;
