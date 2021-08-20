/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, TextField } from '@material-ui/core';

const EducationHistory = () => {
  const [values, setValues] = useState({
    university_name: '',
    degree_name: '',
    degree_duration: ''
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
        <title>Education History</title>
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
                label="University Name"
                name="university_name"
                onChange={handleChange}
                required
                type="text"
                value={values.university_name}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Degree Name"
                name="degree_name"
                onChange={handleChange}
                required
                type="text"
                value={values.degree_name}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Degree Duration"
                name="degree_duration"
                onChange={handleChange}
                required
                type="number"
                value={values.degree_duration}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EducationHistory;
