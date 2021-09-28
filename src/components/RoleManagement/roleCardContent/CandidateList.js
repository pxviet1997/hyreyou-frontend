import React, { useState, useEffect } from 'react';
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
import { listRoleCandidate } from 'src/api';

const initialValues = {
  title: '',
  description: '',
  skillSet: ''
};

const CandidateList = ({ setisShowCandiateList, setIsShowRole, roleId }) => {
  console.log(roleId);
  const [isListCandidates, setIsListCandidates] = useState();
  useEffect(async () => {
    try {
      const response = await listRoleCandidate({ roleId });
      console.log(response);
      setIsListCandidates(response);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
                  Student Name
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Email"
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
            <TableBody />
            {/* listRole
                && listRole.map((role) => (
                  <TableRow
                    hover
                    key={role.id}
                    onClick={() => console.log(role.id)}
                  >
                    <TableCell>
                      {role.roleTitle}
                    </TableCell>
                    <TableCell>
                      {role.numberOfTalents}
                    </TableCell>
                  </TableRow>
                )) */}
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

export default CandidateList;
