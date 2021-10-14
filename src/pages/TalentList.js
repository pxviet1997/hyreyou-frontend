import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box, Button, Card, CardHeader, Divider, Grid, Container, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { getTalentList, resetTalentList } from 'src/redux/actions/businessAction';

const TalentList = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { talentList } = useSelector((storeState) => storeState.shared);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    dispatch(getTalentList({ roleId: state.roleId }));
  }, []);

  useEffect(async () => {
    if (!talentList || talentList.length === 0) return;
    setLoading(false);
  }, [talentList]);

  useEffect(() => {
    return () => dispatch(resetTalentList());
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
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Card>
            <Box px={4}>
              <Grid container item lg={6} md={6} xs={6} direction="row" justifyContent="flex-start">
                <Grid item py={2} pl={2} display="flex" justify="center">
                  <Button variant="contained" onClick={() => navigate(-1)} color="primary">
                    Back
                  </Button>
                </Grid>
                <Grid item display="flex" justify="center">
                  <CardHeader title={`Role - ${state.roleTitle}`} />
                </Grid>
              </Grid>
            </Box>
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
                <Box sx={{ minWidth: 800, paddingX: 6 }}>
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
                    <TableBody>
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
                    </TableBody>
                  </Table>
                </Box>)}
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
        </Container>
      </Box>
    </>
  );
};

export default TalentList;
