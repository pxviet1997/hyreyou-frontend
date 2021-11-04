import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box, Button, Card, CardHeader, Divider, Grid, Container, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress, Typography, TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getTalentList, resetTalentList } from 'src/redux/actions/businessAction';
import { Formik } from 'formik';

const RoleDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { role, type } = state;
  const { talentList } = useSelector((storeState) => storeState.shared);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    title: role.title,
    description: role.description,
    skillSet: role.skillSet.join(', ')
  };

  useEffect(async () => {
    dispatch(getTalentList({ roleId: role._id, type }));
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
              <Grid container>
                <Grid container item lg={6} md={6} xs={6} direction="row" justifyContent="flex-start">
                  <Grid item py={2} pl={2} display="flex" justify="center">
                    <Button variant="contained" onClick={() => navigate('..')} color="primary">
                      Back
                    </Button>
                  </Grid>
                  <Grid item display="flex" justify="center">
                    <CardHeader title={`Role - ${role.title}`} />
                  </Grid>
                </Grid>
                <Grid container item lg={6} md={6} xs={6} direction="row" justifyContent="flex-end">
                  <Grid
                    item
                    py={2}
                    mr={!isEditing && 2}
                    ml={2}
                  >
                    <Button
                      variant="contained"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {!isEditing ? 'Edit' : 'Cancel'}
                    </Button>
                  </Grid>
                  {isEditing
                    && (
                      <Grid
                        item
                        py={2}
                        mr={2}
                        ml={2}
                      >
                        <Button
                          variant="contained"
                          onClick={() => setIsEditing(!isEditing)}
                          type="submit"
                        >
                          Save
                        </Button>
                      </Grid>)}
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
                <Box sx={{ minWidth: 800, paddingX: 6, paddingY: 3 }}>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={async (values) => {
                      // dispatch(createRole({ _id: userId, skillSet, ...values }));
                      // setOpen(false);
                      // setOpenAlert(true);
                      // setSkillSet([]);
                    }}
                  >
                    {({
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      values,
                    }) => {
                      console.log(values);
                      return (
                        <>
                          <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>

                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Role Title"
                                  name="title"
                                  required
                                  onChange={handleChange}
                                  value={values.title}
                                  inputProps={{ readOnly: !isEditing }}
                                />
                              </Grid>

                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Role Description"
                                  name="description"
                                  onChange={handleChange}
                                  required
                                  value={values.description}
                                  variant="outlined"
                                  inputProps={{ readOnly: !isEditing }}
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Skill Set"
                                  name="skillSet"
                                  onChange={handleChange}
                                  required
                                  value={values.skillSet}
                                  variant="outlined"
                                  inputProps={{ readOnly: !isEditing }}
                                />
                              </Grid>
                            </Grid>
                          </form>
                        </>
                      );
                    }}
                  </Formik>
                  <Divider sx={{ marginY: 4 }} />
                  <Typography>
                    List of Matched Talents
                  </Typography>
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
                              navigate('talent', { state: { talentId: row._id, roleId: role._id, type } });
                            }}
                          >
                            <TableCell>
                              {`${row.firstName} ${row.lastName}`}
                            </TableCell>
                            <TableCell>
                              {row.email}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </Box>)}
            {/* <Box
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
            </Box> */}
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default RoleDetail;
