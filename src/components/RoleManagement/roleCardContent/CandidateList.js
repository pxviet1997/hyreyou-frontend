import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
  Container,
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
import { useDispatch } from 'react-redux';
import { getTalent } from 'src/redux/actions/businessAction';
// import CandaidateModal from './CandidateModal';

const initialValues = {
  title: '',
  description: '',
  skillSet: ''
};

const CandidateList = ({ setisShowCandiateList, setIsShowRole }) => {
  const navigate = useNavigate();
  // const [openModal, setOpenModal] = useState(false);
  // const [currentCandidateId, setCurrentCandidateId] = useState('');
  const { state } = useLocation();
  const [isListCandidates, setIsListCandidates] = useState();
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      // console.log(state);
      const response = await listRoleCandidate({ roleId: state.roleId });
      console.log(response);
      setIsListCandidates(response);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Role</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        {/* <CandaidateModal openModal={openModal} setOpenModal={setOpenModal} currentCandidateId={currentCandidateId} /> */}
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              <Card>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    md={4}
                    style={{
                      padding: 16,
                      display: 'flex',
                      justifyContent: 'flex-start'
                    }}
                  >
                    <Button variant="outlined" onClick={() => navigate(-1)}>
                      Back
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    md={8}
                    style={{
                      display: 'flex',
                    }}
                  >
                    <CardHeader title="Role Management" />
                  </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <CardHeader justifycontent="center" alignitems="center" title={`Role -- ${state.roleTitle}`} />
                  </Grid>
                </Grid>

                <Divider />
                <PerfectScrollbar>
                  <Box sx={{ minWidth: 800 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            Talent Name
                          </TableCell>
                          <TableCell>
                            Email ID
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody />
                      {isListCandidates
                        && isListCandidates.map((row) => (
                          <TableRow
                            hover
                            key={row._id}
                            onClick={() => {
                              // return <Navigate to={`app/role/candidate-list/${role.id}`} />;
                              dispatch(getTalent(row._id));
                              navigate('candidate');
                            }}
                          >
                            <TableCell>
                              {`${row.firstName + row.lastName}`}
                            </TableCell>
                            <TableCell>
                              {row.email}
                            </TableCell>
                          </TableRow>
                        ))}
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CandidateList;
