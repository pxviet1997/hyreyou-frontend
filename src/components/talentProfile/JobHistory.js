/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Container,
  CardContent,
  Divider,
  Grid,
  TextField,
  Modal,
  Typography,
  Snackbar,
  Alert
} from '@material-ui/core';
import { Formik } from 'formik';
import AddJobModal from './modal/AddJobModal';
import { updateJobHistory } from 'src/redux/actions/talentAction';

const JobHistory = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { userType, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const { jobHistory } = data;
  // console.log(typeof jobHistory);
  const initialValues = jobHistory.length !== 0
    ? { jobHistory }
    : {
      jobHistory: [{
        companyName: '',
        jobPosition: '',
        jobDescription: '',
        yearOfExperience: ''
      }]
    };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
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
            initialValues={initialValues}
            onSubmit={async (values) => {
              setIsEditing(false);
              dispatch(updateJobHistory({ _id: data._id, info: values }));
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
                                    setOpen(true);
                                  }}
                                >
                                  Add Role
                                </Button>
                              </Grid>
                            )}
                        </Grid>
                      )}

                    <AddJobModal open={open} setOpenAlert={setOpenAlert} setOpen={setOpen} id={data._id} />

                    <Grid container spacing={7}>
                      {values.jobHistory.map((value, index) => {
                        return (
                          <Grid key={value._id} item lg={12} md={12} xs={12}>
                            <Grid container spacing={2}>
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
    </>
  );
};

export default JobHistory;
