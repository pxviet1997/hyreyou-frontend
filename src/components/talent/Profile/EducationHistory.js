/* eslint-disable object-curly-newline */
import React, { memo, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { FieldArray } from 'formik';
import { MyTextField } from 'src/components/shared';

const EducationHistory = memo(
  ({ isEditForm, values, handleChange, handleBlur, touched, errors }) => (
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
          <FieldArray name="education">
            {(arrayHelpers) => (
              <Grid container spacing={3}>
                <Button
                  onClick={() => {
                    arrayHelpers.push({
                      id: `${Math.random()}`,
                      nameOfUniversity: '',
                      nameOfDegree: '',
                      degreeDuration: ''
                    });
                  }}
                >
                  Add eduction
                </Button>
                {values.education.map((data, index) => {
                  console.log({ data });
                  return (
                    <Fragment key={data.id}>
                      <Grid item lg={12} md={12} xs={12}>
                        <MyTextField
                          name={`education[${index}].nameOfUniversity`}
                          fullWidth
                          label="University Name"
                          placeholder="University Name"
                          type="text"
                          disabled={isEditForm}
                        />
                      </Grid>
                      <Grid item lg={12} md={12} xs={12}>
                        <MyTextField
                          name={`education[${index}].nameOfDegree`}
                          fullWidth
                          label="Degree Name"
                          required
                          type="text"
                          disabled={isEditForm}
                        />
                      </Grid>
                      <Grid item lg={12} md={12} xs={12}>
                        <MyTextField
                          name={`education[${index}].degreeDuration`}
                          fullWidth
                          label="Degree Duration"
                          required
                          type="number"
                          disabled={isEditForm}
                        />
                      </Grid>
                    </Fragment>
                  );
                })}
              </Grid>
            )}
          </FieldArray>
        </Container>
      </Box>
    </>
  )
);

export default EducationHistory;

EducationHistory.propTypes = {
  isEditForm: PropTypes.bool,
  values: PropTypes.shape({
    education: PropTypes.arrayOf({
      id: PropTypes.string,
      nameOfUniversity: PropTypes.string,
      nameOfDegree: PropTypes.string,
      degreeDuration: PropTypes.string
    })
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};
