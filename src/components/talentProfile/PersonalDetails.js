import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Snackbar,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updatePersonalDetail } from 'src/redux/actions/talentAction';

const PersonalDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const { user, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    mobileNumber: user.mobileNumber,
    address: {
      country: user.address.country,
      city: user.address.city,
      streetName: user.address.streetName,
      state: user.address.state,
      postalCode: user.address.postalCode
    }
  };

  const originalTouched = {
    firstName: false,
    lastName: false,
    email: false,
    mobileNumber: false,
    address: {
      country: false,
      city: false,
      streetName: false,
      state: false,
      postalCode: false
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Talent | Personal Details</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          pt: 2
          // py: 3
        }}
      >
        <Container maxWidth="lg">
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().max(255).required('Email is required'),
              lastName: Yup.string().max(255).required('Last name is required'),
              mobileNumber: Yup.string().max(255).required('Mobile Number is required'),
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              address: Yup.object().shape({
                country: Yup.string().max(255).required('Country is required'),
                city: Yup.string().max(255).required('City is required'),
                streetName: Yup.string().max(255).required('Street Name is required'),
                state: Yup.string().max(255).required('State is required'),
                postalCode: Yup.string().max(255).required('Postal Code is required'),
              }),
            })}
            onSubmit={async (values) => {
              setIsEditing(!isEditing);
              const { _id } = user;
              // console.log(values);
              dispatch(updatePersonalDetail({ _id, info: values }));
              setOpen(true);
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
              return (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.firstName && errors.firstName)}
                        helperText={isEditing && touched.firstName && errors.firstName}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.lastName && errors.lastName)}
                        helperText={isEditing && touched.lastName && errors.lastName}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={values.email}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.email && errors.email)}
                        helperText={isEditing && touched.email && errors.email}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        name="mobileNumber"
                        type="text"
                        value={values.mobileNumber}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.mobileNumber && errors.mobileNumber)}
                        helperText={isEditing && touched.mobileNumber && errors.mobileNumber}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        name="address.country"
                        type="text"
                        value={values.address.country}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => {
                          if (isEditing) handleBlur(event);
                          console.log(touched);
                          console.log(errors);
                        }}
                        required
                        error={Boolean(isEditing && touched.address.country && errors.address && errors.address.country)}
                        helperText={isEditing && touched.address.country && errors.address && errors.address.country}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="City"
                        name="address.city"
                        type="text"
                        value={values.address.city}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.address.city && errors.address && errors.address.city)}
                        helperText={isEditing && touched.address.city && errors.address && errors.address.city}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Street Name"
                        name="address.streetName"
                        type="text"
                        value={values.address.streetName}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.address.streetName && errors.address && errors.address.streetName)}
                        helperText={isEditing && touched.address.streetName && errors.address && errors.address.streetName}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="State"
                        name="address.state"
                        type="text"
                        value={values.address.state}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.address.state && errors.address && errors.address.state)}
                        helperText={isEditing && touched.address.state && errors.address && errors.address.state}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Postal Code"
                        name="address.postalCode"
                        type="text"
                        value={values.address.postalCode}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.address.postalCode && errors.address && errors.address.postalCode)}
                        helperText={isEditing && touched.address.postalCode && errors.address && errors.address.postalCode}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: 23 }} spacing={2}>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          setIsEditing(!isEditing);
                          setTouched(originalTouched, false);
                        }}
                      >
                        {!isEditing ? 'Edit' : 'Cancel'}
                      </Button>
                    </Grid>
                    {isEditing && (
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
                  </Grid>
                  <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }} variant="filled">
                      {message}
                    </Alert>
                  </Snackbar>
                </form>
              );
            }}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default PersonalDetails;

PersonalDetails.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    mobileNumber: PropTypes.string,
    streetName: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    postalCode: PropTypes.string
  }),
};
