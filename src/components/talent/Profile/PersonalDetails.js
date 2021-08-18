import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Button
} from '@material-ui/core';

const PersonalDetails = () => {
  const [values, setValues] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    country: '',
    city: '',
    street_name: '',
    state: '',
    postal_code: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <>
      <Helmet>
        <title>Personal Details</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="full_name"
                onChange={handleChange}
                required
                type="text"
                value={values.full_name}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                type="text"
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone_number"
                onChange={handleChange}
                required
                type="text"
                value={values.phone_number}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                type="text"
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                name="city"
                onChange={handleChange}
                required
                type="text"
                value={values.city}
                variant="outlined"
              />
            </Grid>

            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Street Name"
                name="street_name"
                onChange={handleChange}
                required
                type="text"
                value={values.street_name}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="State"
                name="state"
                onChange={handleChange}
                required
                type="text"
                value={values.state}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Postal Code"
                name="postal_code"
                onChange={handleChange}
                required
                type="text"
                value={values.postal_code}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PersonalDetails;
