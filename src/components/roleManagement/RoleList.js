import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box, Button, Card, CardHeader, Divider, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Tooltip
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useNavigate } from 'react-router-dom';

const RoleList = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.shared);

  return (
    <Card>
      {/* <PerfectScrollbar> */}
      <Box sx={{ minWidth: 800, paddingX: 6 }}>
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
            {user.roles
              && user.roles.map((role) => (
                <TableRow
                  hover
                  key={role.id}
                  onClick={() => {
                    navigate('talent-list', { state: { roleId: role._id, roleTitle: role.title } });
                  }}
                >
                  <TableCell>
                    {role.title}
                  </TableCell>
                  <TableCell>
                    {role.talentIds.length}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      {/* </PerfectScrollbar> */}
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
