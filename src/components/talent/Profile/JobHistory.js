/* eslint-disable object-curly-newline */
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Box, Container, Grid, TextField } from '@material-ui/core';

const JobHistory = ({
  isEditForm,
  values,
  handleChange,
  handleBlur,
  touched,
  errors
}) => {
  console.log('[JobHistory]', { values });

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
                name="companyName"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                value={values.companyName}
                variant="outlined"
                helperText={touched.companyName && errors.companyName}
                error={Boolean(touched.companyName && errors.companyName)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Job Position"
                name="jobPosition"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                value={values.jobPosition}
                variant="outlined"
                helperText={touched.jobPosition && errors.jobPosition}
                error={Boolean(touched.jobPosition && errors.jobPosition)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Job Description"
                name="jobDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                value={values.jobDescription}
                variant="outlined"
                helperText={touched.jobDescription && errors.jobDescription}
                error={Boolean(touched.jobDescription && errors.jobDescription)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Years Of Experience"
                name="yearOfExperience"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="number"
                value={values.yearOfExperience}
                variant="outlined"
                helperText={touched.yearOfExperience && errors.yearOfExperience}
                error={Boolean(
                  touched.yearOfExperience && errors.yearOfExperience
                )}
                disabled={isEditForm}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default JobHistory;

JobHistory.propTypes = {
  isEditForm: PropTypes.bool,
  values: PropTypes.shape({
    companyName: PropTypes.string,
    jobPosition: PropTypes.string,
    jobDescription: PropTypes.string,
    yearOfExperience: PropTypes.string
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};
