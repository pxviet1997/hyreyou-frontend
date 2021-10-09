import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box, Button, Card, CardHeader, Divider, Grid, Container, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { getTalentList } from 'src/redux/actions/businessAction';

const TalentList = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { talentList } = useSelector((storeState) => storeState.shared);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (talentList) return;
    dispatch(getTalentList({ roleId: state.roleId }));
  }, []);

  useEffect(async () => {
    if (!talentList) return;
    setLoading(false);
  }, [talentList]);

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
                    <CardHeader title={`Role - ${state.roleTitle}`} />
                  </Grid>
                </Grid>
                <Divider />
                {/* <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <CardHeader justifycontent="center" alignitems="center" title={`Role - ${state.roleTitle}`} />
                  </Grid>
                </Grid> */}
                <Divider />
                {loading
                  ? (
                    <Box
                      sx={{
                        minHeight: '100%',
                        minWidth: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CircularProgress />
                    </Box>)
                  : (
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
                          {talentList
                            && talentList.map((row) => (
                              <TableRow
                                hover
                                key={row._id}
                                onClick={() => {
                                  navigate('talent', { state: { talentId: row._id, roleId: state.roleId } });
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
                    </PerfectScrollbar>)}
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

export default TalentList;
