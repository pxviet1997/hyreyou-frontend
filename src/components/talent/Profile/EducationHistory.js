/* eslint-disable object-curly-newline */
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Box, Container, Grid, TextField } from '@material-ui/core';

const EducationHistory = ({
  isEditForm,
  values,
  handleChange,
  handleBlur,
  touched,
  errors
}) => {
  console.log('[EducationHistory]', { values });
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
                name="nameOfUniversity"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                value={values.nameOfUniversity}
                variant="outlined"
                helperText={touched.nameOfUniversity && errors.nameOfUniversity}
                error={Boolean(
                  touched.nameOfUniversity && errors.nameOfUniversity
                )}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Degree Name"
                name="nameOfDegree"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                value={values.nameOfDegree}
                variant="outlined"
                helperText={touched.nameOfDegree && errors.nameOfDegree}
                error={Boolean(touched.nameOfDegree && errors.nameOfDegree)}
                disabled={isEditForm}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Degree Duration"
                name="degreeDuration"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="number"
                value={values.degreeDuration}
                variant="outlined"
                helperText={touched.degreeDuration && errors.degreeDuration}
                error={Boolean(touched.degreeDuration && errors.degreeDuration)}
                disabled={isEditForm}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EducationHistory;

EducationHistory.propTypes = {
  isEditForm: PropTypes.bool,
  values: PropTypes.shape({
    nameOfUniversity: PropTypes.string,
    nameOfDegree: PropTypes.string,
    degreeDuration: PropTypes.string
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};
