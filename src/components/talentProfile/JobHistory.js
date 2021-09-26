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
  Typography
} from '@material-ui/core';
import { FieldArray, Formik } from 'formik';
import { MyTextField } from 'src/components/shared';
import * as Yup from 'yup';
import AddJobModal from '../modal/AddJobModal';

const JobHistory = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  // console.log(user);

  const { jobHistory } = user;
  const initialValues = jobHistory.length !== 0
    ? { jobHistory }
    : {
      jobHistory: [{
        companyName: '',
        jobPosition: '',
        jobDescription: '',
        yearOfExperience: ''
      }, {
        companyName: '',
        jobPosition: '',
        jobDescription: '',
        yearOfExperience: ''
      }]
    };

  const originalTouched = initialValues.jobHistory.map(() => {
    return {
      companyName: false,
      jobPosition: false,
      jobDescription: false,
      yearOfExperience: false
    };
  });

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
            // validationSchema={Yup.array().of(
            //   Yup.object().shape({
            //     companyName: Yup.string().max(255).required('Company Name is required'),
            //     jobPosition: Yup.string().max(255).required('Job Position is required'),
            //     // jobDescription:  Yup.string().max(255).required('Email is required'),
            //     // yearOfExperience:  Yup.string().max(255).required('Email is required')
            //   })
            // )}
            //   firstName: Yup.string().max(255).required('Email is required'),
            //   lastName: Yup.string().max(255).required('Last name is required'),
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              setTouched
            }) => {
              // console.log(values);
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    <Grid container style={{ marginBottom: 23 }} spacing={2}>
                      <Grid item>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => {
                            setIsAdding(false);
                            setIsEditing(!isEditing);
                            setTouched(originalTouched, false);
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
                      {/* // : ( */}
                      {(!isAdding && !isEditing)
                        && (
                          <Grid item>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() => {
                                setIsEditing(!isEditing);
                                setTouched(originalTouched, false);
                                setIsAdding(!isAdding);
                                setOpen(true);
                              }}
                            >
                              Add Role
                            </Button>
                          </Grid>
                        )}
                    </Grid>
                    <AddJobModal open={open} setOpen={setOpen} id={user._id} />
                    <Grid container spacing={7}>
                      {values.jobHistory.map((value, index) => {
                        // console.log(index);
                        return (
                          <Grid item lg={12} md={12} xs={12}>
                            <Grid container spacing={2}>
                              <Grid item lg={12} md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Year Of Experience"
                                  name={`jobHistory[${index}].yearOfExperience`}
                                  type="text"
                                  value={value.yearOfExperience}
                                  variant="outlined"
                                  onChange={handleChange}
                                // onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                // required
                                // error={Boolean(isEditing && touched.mobileNumber && errors.mobileNumber)}
                                // helperText={isEditing && touched.mobileNumber && errors.mobileNumber}
                                // inputProps={{ readOnly: !isEditing, }}
                                />
                              </Grid>
                              <Grid item lg={12} md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Company Name"
                                  name="companyName"
                                  type="text"
                                  value={value.companyName}
                                  variant="outlined"
                                  onChange={handleChange}
                                // onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                // required
                                // error={Boolean(isEditing && touched.email && errors.email)}
                                // helperText={isEditing && touched.email && errors.email}
                                // inputProps={{ readOnly: !isEditing, }}
                                />
                              </Grid>
                              <Grid item lg={12} md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Job Position"
                                  name="jobPosition"
                                  type="text"
                                  value={value.jobPosition}
                                  variant="outlined"
                                  onChange={handleChange}
                                // onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                // required
                                // error={Boolean(isEditing && touched.mobileNumber && errors.mobileNumber)}
                                // helperText={isEditing && touched.mobileNumber && errors.mobileNumber}
                                // inputProps={{ readOnly: !isEditing, }}
                                />
                              </Grid>
                              <Grid item lg={12} md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Job Description"
                                  name="jobDescription"
                                  type="text"
                                  value={value.jobDescription}
                                  variant="outlined"
                                  onChange={handleChange}
                                // onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                // required
                                // error={Boolean(isEditing && touched.email && errors.email)}
                                // helperText={isEditing && touched.email && errors.email}
                                // inputProps={{ readOnly: !isEditing, }}
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
        </Container>
      </Box>
    </>
  );
};

export default JobHistory;
