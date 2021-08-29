import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { reqSignUp } from 'src/api';

const Register = () => {
  const navigate = useNavigate();
  const [userType, setUser] = useState('Talent');

  const onUserChange = () => {
    if (userType === 'Talent') {
      setUser('Business');
    } else setUser('Talent');
  };

  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              mobileNumber: '',
              password: '',
              confirmPassword: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                firstName: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                mobileNumber: Yup.string().max(255).required('Mobile Number is required'),
                password: Yup.string().max(255).required('Password is required'),
                confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={async (values) => {
              const { policy, confirmPassword, ...newUser } = values;

              const id = await reqSignUp({ ...newUser, userType });
              // console.log(id);
              // navigate('/app/dashboard', {replace: true });
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
            }) => (
              <form onSubmit={handleSubmit}>
                <Box>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign Up
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Enter your name, email address and password to createyour account
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      label="First name"
                      margin="normal"
                      name="firstName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <TextField
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      helperText={touched.lastName && errors.lastName}
                      label="Last name"
                      margin="normal"
                      name="lastName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.mobileNumber && errors.mobileNumber)}
                  fullWidth
                  helperText={touched.mobileNumber && errors.mobileNumber}
                  label="Mobile Number"
                  margin="normal"
                  name="mobileNumber"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.mobileNumber}
                  variant="outlined"
                />
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <TextField
                      error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                      fullWidth
                      helperText={touched.confirmPassword && errors.confirmPassword}
                      label="Confirm Password"
                      margin="normal"
                      name="confirmPassword"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.confirmPassword}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    User Type
                  </Typography>
                  <RadioGroup row aria-label="gender" name="gender1" value={userType} onChange={onUserChange}>
                    <FormControlLabel value="Talent" control={<Radio />} label="Talent" />
                    <FormControlLabel value="Business" control={<Radio />} label="Business" />
                  </RadioGroup>
                </Box>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Already have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="body1"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
