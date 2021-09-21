import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

const PersonalDetails = () => {
  const { user } = useSelector((state) => state.auth);

  // console.log('[PersonalDetails]', { values, handleChange });
  return (
    <>
      <Helmet>
        <title>Talent | Personal Details</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          pt: 2
          // py: 3
        }}
      >
        <Container maxWidth="lg">
          <Formik
            // initialValues={talentForm || initialValues}
            // validationSchema={validationSchema.talentProfileFormSchema}
            // enableReinitialize
            onSubmit={async (values) => {
              // console.log({ values, last: isLastStep() });
              // if (isLastStep()) {
              //   if (!isEditForm) return;
              //   if (isNewForm) {
              //     await handleCreateForm(values);
              //   } else {
              //     await handleUpdateForm(values);
              //   }
              // } else {
              //   setValue((s) => s + 1);
              // }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => {
              console.log({ errors });
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        onChange={handleChange}
                        type="text"
                        value={user.firstName}
                        inputProps={{ readOnly: true, }}
                      />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={user.lastName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        onChange={handleChange}
                        type="email"
                        value={user.email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        name="mobileNumber"
                        onChange={handleChange}
                        type="text"
                        value={user.mobileNumber}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        onChange={handleChange}
                        type="text"
                        value={user.country}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                        onChange={handleChange}
                        type="text"
                        value={user.city}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Street Name"
                        name="streetName"
                        onChange={handleChange}
                        type="text"
                        value={user.streetName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="State"
                        name="state"
                        onChange={handleChange}
                        type="text"
                        value={user.state}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Postal Code"
                        name="postalCode"
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        // required
                        type="text"
                        value={user.postalCode}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: 23 }} spacing={2}>
                    <Grid item>
                      <Button color="primary" variant="contained">
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button color="primary" variant="contained" type="submit">
                        Save
                      </Button>
                    </Grid>
                  </Grid>

                </Form>
              );
            }}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default PersonalDetails;

PersonalDetails.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    mobileNumber: PropTypes.string,
    streetName: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    postalCode: PropTypes.string
  }),
};
