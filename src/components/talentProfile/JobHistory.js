/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Snackbar,
  Alert,
} from '@material-ui/core';
import {
  XCircle
} from 'react-feather';
import { Formik } from 'formik';
import AddJobModal from './modal/AddJobModal';
import { removeJobHistory, updateJobHistory } from 'src/redux/actions/talentAction';
import RemoveModal from './modal/RemoveModal';

const JobHistory = ({ data }) => {
  const { user, userType, error } = data;
  const { jobHistory } = user;

  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const [initialValues, setInitialValues] = useState({ jobHistory });

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenAlert(false);
  };

  const removePressed = () => {
    jobHistory.splice(currentIndex, 1);
    dispatch(removeJobHistory({ _id: user._id, info: { jobHistory } }));
  };

  return (
    <>
      <Helmet>
        <title>Job History</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          py: 3
        }}
      >

        <Container maxWidth="lg">
          <Formik
            enableReinitialize
            initialValues={{ jobHistory }}
            onSubmit={async (values) => {
              setIsEditing(false);
              dispatch(updateJobHistory({ _id: user._id, info: values }));
              setOpenAlert(true);
            }}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              values,
            }) => {
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    {userType === 'Talent'
                      && (
                        <Grid container style={{ marginBottom: 40 }} spacing={2}>
                          <Grid item>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() => {
                                setIsAdding(false);
                                setIsEditing(!isEditing);
                              }}
                            >
                              {!isEditing ? 'Edit Role' : 'Cancel'}
                            </Button>
                          </Grid>
                          {isEditing
                            && (
                              <Grid item>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  type="submit"
                                  disabled={isSubmitting}
                                >
                                  Save
                                </Button>
                              </Grid>
                            )}
                          {!isEditing
                            && (
                              <Grid item>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  onClick={() => {
                                    // setTouched(originalTouched, false);
                                    setIsAdding(!isAdding);
                                    setOpenAddModal(true);
                                  }}
                                >
                                  Add Role
                                </Button>
                              </Grid>
                            )}
                        </Grid>
                      )}

                    <AddJobModal open={openAddModal} setOpen={setOpenAddModal} setOpenAlert={setOpenAlert} id={user._id} />

                    <Grid container spacing={7}>
                      {values.jobHistory.map((value, index) => {
                        // console.log(index);
                        return (
                          <Grid key={value._id} item lg={12} md={12} xs={12}>
                            <RemoveModal open={openRemoveModal} setOpen={setOpenRemoveModal} setOpenAlert={setOpenAlert} removePressed={removePressed} />
                            <Grid container>
                              {isEditing
                                && (
                                  <Grid item lg={1}>
                                    <Button
                                      onClick={() => {
                                        setOpenRemoveModal(true);
                                        setCurrentIndex(index);
                                      }}
                                    >
                                      <XCircle color="red" />
                                    </Button>
                                  </Grid>
                                )}
                              <Grid container item spacing={2} lg={isEditing ? 11 : 12}>
                                <Grid item lg={12} md={12} xs={12}>
                                  <TextField
                                    fullWidth
                                    label="Year Of Experience"
                                    name={`jobHistory[${index}]yearOfExperience`}
                                    type="text"
                                    value={value.yearOfExperience}
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                    required
                                    inputProps={{ readOnly: !isEditing, }}
                                  />
                                </Grid>
                                <Grid item lg={12} md={12} xs={12}>
                                  <TextField
                                    fullWidth
                                    label="Company Name"
                                    name={`jobHistory[${index}]companyName`}
                                    type="text"
                                    value={value.companyName}
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                    required
                                    inputProps={{ readOnly: !isEditing, }}
                                  />
                                </Grid>
                                <Grid item lg={12} md={12} xs={12}>
                                  <TextField
                                    fullWidth
                                    label="Job Position"
                                    name={`jobHistory[${index}]jobPosition`}
                                    type="text"
                                    value={value.jobPosition}
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                    required
                                    inputProps={{ readOnly: !isEditing, }}
                                  />
                                </Grid>
                                <Grid item lg={12} md={12} xs={12}>
                                  <TextField
                                    fullWidth
                                    label="Job Description"
                                    name={`jobHistory[${index}]jobDescription`}
                                    type="text"
                                    value={value.jobDescription}
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                    required
                                    inputProps={{ readOnly: !isEditing, }}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </form>
                </>
              );
            }}
          </Formik>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }} variant="filled">
              {message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
      {/* )} */}
    </>
  );
};

export default JobHistory;
