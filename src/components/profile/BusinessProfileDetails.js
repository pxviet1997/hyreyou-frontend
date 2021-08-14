import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const gender = [
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'female',
    label: 'Female'
  }
];

const BusinessProfileDetails = (props) => {
  const [values, setValues] = useState({
    business_name: '',
    abn: '',
    contact_number: '',
    email: '',
    business_address: '',
    business_description: '',
    cluture_information: '',
    type: '',
    password: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <Grid container spacing={3}>
          <Grid item md={6} xs={8}>
            <CardHeader subheader="Profile" title="Business Register" />
          </Grid>
          <Grid item md={6} xs={4}>
            <div
              style={{
                padding: 16,
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Button variant="outlined">
                Edit
              </Button>
            </div>
          </Grid>
        </Grid>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Business name"
                name="business_name"
                onChange={handleChange}
                required
                value={values.business_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="ABN"
                name="abn"
                onChange={handleChange}
                required
                value={values.abn}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                type="email"
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Contact Number"
                name="contact_number"
                onChange={handleChange}
                required
                type="number"
                value={values.contact_number}
                variant="outlined"
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                required
                type="text"
                value={values.address}
                variant="outlined"
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Business Description"
                name="business_description"
                onChange={handleChange}
                required
                type="text"
                value={values.business_description}
                variant="outlined"
                multiline
                rows={3}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Culture Information"
                name="cluture_information"
                onChange={handleChange}
                required
                type="text"
                value={values.cluture_information}
                variant="outlined"
                multiline
                rows={3}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Gender"
                name="gender"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.gender}
                variant="outlined"
              >
                {gender.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Type"
                name="type"
                onChange={handleChange}
                required
                type="text"
                value={values.type}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                onChange={handleChange}
                required
                type="password"
                value={values.password}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        {/* <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box> */}
      </Card>
    </form>
  );
};

export default BusinessProfileDetails;
