import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, Card, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useNavigate } from 'react-router-dom';

const RoleList = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.shared);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const isFirstRun = useRef(true);

  return (
    <Card>
      <Box sx={{ minWidth: 800, paddingX: 6 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Role
              </TableCell>
              <TableCell>
                Number of Shortlisted Talents
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
                    navigate('detail', { state: { role, type: 'shortlistedTalentIds' } });
                  }}
                >
                  <TableCell>
                    {role.title}
                  </TableCell>
                  <TableCell>
                    {role.shortlistedTalentIds.length}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      {/* )} */}
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
