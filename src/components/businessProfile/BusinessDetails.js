import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearMessage } from 'src/redux/actions/messageAction';
import { updateBusinessDetail } from 'src/redux/actions/businessAction';

const BusinessDetails = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    userType, error
  } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const initialValues = {
    businessName: data.businessName || '',
    businessABN: data.businessABN || '',
    email: data.email || '',
    contactNumber: data.mobileNumber || '',
    address: {
      country: data.address ? data.address.country : '',
      city: data.address ? data.address.city : '',
      streetName: data.address ? data.address.streetName : '',
      state: data.address ? data.address.state : '',
      postalCode: data.address ? data.address.postalCode : ''
    }
  };

  const originalTouched = {
    businessName: false,
    businessABN: false,
    email: false,
    contactNumber: false,
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

  useEffect(() => {
    dispatch(clearMessage());
  }, []);
  return (
    <>
      <Helmet>
        <title>Business | Details</title>
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
            enableReinitialize
            validationSchema={Yup.object().shape({
              businessName: Yup.string().max(255).required('Business Name is required'),
              businessABN: Yup.string().max(255).required('Business ABN is required'),
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              contactNumber: Yup.string().max(255).required('Contact Number is required'),
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
              const { _id } = data;
              // dispatch(clearMessage());
              dispatch(updateBusinessDetail({ _id, info: values }));
              // dispatch(updatePersonalDetail({ _id, info: values }));
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
                        label="Business Name"
                        name="businessName"
                        type="text"
                        value={values.businessName}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.businessName && errors.businessName)}
                        helperText={isEditing && touched.businessName && errors.businessName}
                        inputProps={{ readOnly: !isEditing, }}
                      // InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Business ABN"
                        name="businessABN"
                        type="text"
                        value={values.businessABN}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.businessABN && errors.businessABN)}
                        helperText={isEditing && touched.businessABN && errors.businessABN}
                        inputProps={{ readOnly: !isEditing, }}
                      // InputLabelProps={{ shrink: true }}
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
                      // InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Contact Number"
                        name="contactNumber"
                        type="text"
                        value={values.contactNumber}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.contactNumber && errors.contactNumber)}
                        helperText={isEditing && touched.contactNumber && errors.contactNumber}
                        inputProps={{ readOnly: !isEditing, }}
                      // InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}

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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container style={{ marginTop: 23 }} spacing={2}>
                    {/* {userType === 'Talent' && ( */}
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
                    {/* )} */}
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

export default BusinessDetails;
