import React, { useState } from 'react';
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
import { Navigate } from 'react-router';

const initialValues = {
  title: '',
  description: '',
  skillSet: ''
};

const RoleList = ({
  listRole, setisShowCandiateList, setIsShowRole, setisCreatingRole, setRoleId
}) => {
  console.log(listRole);
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
                      setisShowCandiateList(true);
                      setIsShowRole(false);
                      setRoleId(role.id);
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
