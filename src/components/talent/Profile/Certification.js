/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { Box, Container, Grid, TextField } from '@material-ui/core';

const Certification = ({
  isEditForm,
  values,
  handleChange,
  handleBlur,
  touched,
  errors
}) => {
  console.log('[Certification]', { values });
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
                onBlur={handleBlur}
                required
                type="text"
                value={values.skills}
                variant="outlined"
                helperText={touched.skills && errors.skills}
                error={Boolean(touched.skills && errors.skills)}
                disabled={isEditForm}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Certification;

Certification.propTypes = {
  isEditForm: PropTypes.bool,
  values: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};
