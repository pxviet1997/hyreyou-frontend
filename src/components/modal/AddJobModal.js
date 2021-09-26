/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Modal,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addJobHistory } from 'src/redux/actions/talentAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const AddJobModal = ({ open, setOpen, id }) => {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const initialValues = {
    companyName: '',
    jobPosition: '',
    jobDescription: '',
    yearOfExperience: ''
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CardContent sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            companyName: Yup.string().max(255).required('Company Name is required'),
            jobPosition: Yup.string().max(255).required('Job Position is required'),
            jobDescription: Yup.string().max(255).required('Email is required'),
            yearOfExperience: Yup.string().max(255).required('Email is required')
          })}
          onSubmit={async (values) => {
            // console.log(values);
            dispatch(addJobHistory(id, values));
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
                  <Grid container spacing={2}>
                    <Grid item lg={12} md={12} xs={12}>
                      <Typography id="modal-modal-title" variant="h2" component="h2">
                        Add Job History
                      </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Year Of Experience"
                        name="yearOfExperience"
                        type="text"
                        value={values.yearOfExperience}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={Boolean(touched.yearOfExperience && errors.yearOfExperience)}
                        helperText={touched.yearOfExperience && errors.yearOfExperience}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        name="companyName"
                        type="text"
                        value={values.companyName}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={Boolean(touched.companyName && errors.companyName)}
                        helperText={touched.companyName && errors.companyName}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Job Position"
                        name="jobPosition"
                        type="text"
                        value={values.jobPosition}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={Boolean(touched.jobPosition && errors.jobPosition)}
                        helperText={touched.jobPosition && errors.jobPosition}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Job Description"
                        name="jobDescription"
                        type="text"
                        value={values.jobDescription}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={Boolean(touched.jobDescription && errors.jobDescription)}
                        helperText={touched.jobDescription && errors.jobDescription}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </>
            );
          }}
        </Formik>
      </CardContent>
    </Modal>
  );
};

export default AddJobModal;
