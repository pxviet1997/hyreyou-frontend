/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, TextField } from '@material-ui/core';

const JobHistory = () => {
  const [values, setValues] = useState({
    company_name: '',
    job_position: '',
    job_description: '',
    years_of_experience: ''
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
        <title>Job History</title>
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
                label="Company Name"
                name="company_name"
                onChange={handleChange}
                required
                type="text"
                value={values.company_name}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Job Position"
                name="job_position"
                onChange={handleChange}
                required
                type="text"
                value={values.job_position}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Job Description"
                name="job_description"
                onChange={handleChange}
                required
                type="text"
                value={values.job_description}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Years Of Experience"
                name="years_of_experience"
                onChange={handleChange}
                required
                type="number"
                value={values.years_of_experience}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default JobHistory;
