import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Card,
  Chip,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Navigate, useNavigate } from 'react-router-dom';

const initialValues = {
  title: '',
  description: '',
  skillSet: ''
};

const RoleList = ({
  listRole,
}) => {
  const navigate = useNavigate();
  // console.log(listRole);
  return (
    <Card>
      <CardHeader />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Role
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      No of Talents
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listRole
                && listRole.map((role) => (
                  <TableRow
                    hover
                    key={role.id}
                    // onClick={<CandidateList roleId={role.id} setisShowCandiateList setIsShowRole />}
                    onClick={() => {
                      // setisShowCandiateList(true);
                      // setIsShowRole(false);
                      // setRoleId(role.id);
                      // console.log(`app/role/candidate-list/${role.id}`);
                      // return <Navigate to={`app/role/candidate-list/${role.id}`} />;

                      navigate('candidate-list', { state: { roleId: role.id, roleTitle: role.roleTitle } });
                      // <Navigate />
                    }}
                  >
                    <TableCell>
                      {role.roleTitle}
                    </TableCell>
                    <TableCell>
                      {role.numberOfTalents}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default RoleList;
