import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

const PersonalDetails = ({
  isEditForm,
  values,
  handleChange,
  handleBlur,
  touched,
  errors
}) => {
  const { user } = useSelector((state) => state.auth);

  // console.log('[PersonalDetails]', { values, handleChange });
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
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                onChange={handleChange}
                type="text"
                value={user.firstName}
                inputProps={{ readOnly: true, }}
              // onBlur={handleBlur}
              // required
              // variant="outlined"
              // helperText={touched.firstName && errors.firstName}
              // error={Boolean(touched.firstName && errors.firstName)}
              // disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                // required
                type="text"
                value={user.lastName}
                variant="outlined"
                helperText={touched.lastName && errors.lastName}
                error={Boolean(touched.lastName && errors.lastName)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                // required
                type="email"
                value={user.email}
                variant="outlined"
                helperText={touched.email && errors.email}
                error={Boolean(touched.email && errors.email)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                // required
                type="text"
                value={user.mobileNumber}
                variant="outlined"
                helperText={touched.mobileNumber && errors.mobileNumber}
                error={Boolean(touched.mobileNumber && errors.mobileNumber)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                // required
                type="text"
                value={user.country}
                variant="outlined"
                helperText={touched.country && errors.country}
                error={Boolean(touched.country && errors.country)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                // required
                type="text"
                value={user.city}
                variant="outlined"
                helperText={touched.city && errors.city}
                error={Boolean(touched.city && errors.city)}
                disabled={isEditForm}
              />
            </Grid>

            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Street Name"
                name="streetName"
                onChange={handleChange}
                onBlur={handleBlur}
                // required
                type="text"
                value={user.streetName}
                variant="outlined"
                helperText={touched.streetName && errors.streetName}
                error={Boolean(touched.streetName && errors.streetName)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="State"
                name="state"
                onChange={handleChange}
                onBlur={handleBlur}
                // required
                type="text"
                value={user.state}
                variant="outlined"
                helperText={touched.state && errors.state}
                error={Boolean(touched.state && errors.state)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Postal Code"
                name="postalCode"
                onChange={handleChange}
                onBlur={handleBlur}
                // required
                type="text"
                value={user.postalCode}
                variant="outlined"
                helperText={touched.postalCode && errors.postalCode}
                error={Boolean(touched.postalCode && errors.postalCode)}
                disabled={isEditForm}
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 16, }} spacing={2}>
            <Grid item>
              <Button color="primary" variant="contained">
                Edit
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PersonalDetails;

PersonalDetails.propTypes = {
  isEditForm: PropTypes.bool,
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
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};
