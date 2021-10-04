/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
} from '@material-ui/core';

import { reqListAllRoleAndNoCandidate } from 'src/api';
import AddRole from './AddRole';
import RoleList from './RoleList';

const _id = '612e3302a420646564c01214';

const RoleCardDetails = (props) => {
  const [open, setOpen] = useState(false);
  const [isCreatingRole, setisCreatingRole] = useState(false);
  const [isShowRole, setIsShowRole] = useState(true);
  const [isShowCandiateList, setisShowCandiateList] = useState(false);
  const [roleId, setRoleId] = useState();

  const handleOpen = () => {
    setisCreatingRole(!isCreatingRole);
    setIsShowRole(!isShowRole);
  };
  const handleClose = () => setisCreatingRole(false);
  const [listRole, setListRole] = useState();

  useEffect(async () => {
    try {
      const response = await reqListAllRoleAndNoCandidate({ _id });
      // console.log(response);
      setListRole(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
        : <RoleList listRole={listRole} />
      }
    </Card>
  );
};
export default RoleCardDetails;
