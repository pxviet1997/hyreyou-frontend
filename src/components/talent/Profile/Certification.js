/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, TextField } from '@material-ui/core';

const Certification = () => {
  const [values, setValues] = useState({
    skills: ''
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
        <title>Certification</title>
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
                label="Skill"
                name="skills"
                onChange={handleChange}
                required
                type="text"
                value={values.skills}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Certification;
