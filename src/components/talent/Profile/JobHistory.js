/* eslint-disable object-curly-newline */
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Box, Button, Container, Grid } from '@material-ui/core';
import { FieldArray } from 'formik';
import { MyTextField } from 'src/components/shared';

const JobHistory = memo(
  ({ isEditForm, values, handleChange, handleBlur, touched, errors }) => (
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
          <FieldArray name="jobHistory">
            {(arrayHelpers) => (
              <Grid container spacing={3}>
                <Button
                  onClick={() => {
                    arrayHelpers.push({
                      id: `${Math.random()}`,
                      companyName: '',
                      jobPosition: '',
                      jobDescription: '',
                      yearOfExperience: ''
                    });
                  }}
                >
                  Add Job
                </Button>
                {values.jobHistory.map((data, index) => (
                  <React.Fragment key={data.id}>
                    <Grid item lg={12} md={12} xs={12}>
                      <MyTextField
                        name={`jobHistory[${index}].companyName`}
                        label="Company Name"
                        placeholder="Company Name"
                        type="text"
                        disabled={isEditForm}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <MyTextField
                        name={`jobHistory[${index}].jobPosition`}
                        label="Job Position"
                        placeholder="Job Position"
                        type="text"
                        disabled={isEditForm}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <MyTextField
                        name={`jobHistory[${index}].jobDescription`}
                        label="Job Description"
                        placeholder="Job Description"
                        type="text"
                        disabled={isEditForm}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <MyTextField
                        name={`jobHistory[${index}].yearOfExperience`}
                        label="Years Of Experience"
                        placeholder="Years Of Experience"
                        type="number"
                        disabled={isEditForm}
                      />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            )}
          </FieldArray>
        </Container>
      </Box>
    </>
  )
);

export default JobHistory;

JobHistory.propTypes = {
  isEditForm: PropTypes.bool,
  values: PropTypes.shape({
    jobHistory: PropTypes.arrayOf({
      companyName: PropTypes.string,
      jobPosition: PropTypes.string,
      jobDescription: PropTypes.string,
      yearOfExperience: PropTypes.string
    })
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};
