/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, TextField } from '@material-ui/core';

const JobExpectation = ({
  isEditForm,
  values,
  handleChange,
  handleBlur,
  touched,
  errors
}) => {
  console.log('[JobExpectation]', { values });
  return (
    <>
      <Helmet>
        <title>Job Expectation</title>
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
                label="Culture Prefences"
                name="culturalPreferences"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                value={values.culturalPreferences}
                variant="outlined"
                helperText={
                  touched.culturalPreferences && errors.culturalPreferences
                }
                error={Boolean(
                  touched.culturalPreferences && errors.culturalPreferences
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

export default JobExpectation;

JobExpectation.propTypes = {
  isEditForm: PropTypes.bool,
  values: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};
