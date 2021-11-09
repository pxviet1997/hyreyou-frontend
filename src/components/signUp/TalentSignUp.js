import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { resetError, signUp } from 'src/redux/actions/authAction';
import { clearMessage } from 'src/redux/actions/messageAction';

const TalentSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { message, messageColor } = useSelector((state) => state.message);
  const { error } = useSelector((state) => state.shared);

  const dispatch = useDispatch();

  const onChange = (event, handleChange) => {
    handleChange(event);
    setShowMessage(false);
    if (message) dispatch(clearMessage());
    if (error) dispatch(resetError());
  };

  return (
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
        const { policy, confirmPassword, ...newUserInfo } = values;
        setShowMessage(true);
        dispatch(signUp({ newUserInfo, userType: 'Talent' }));
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
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                error={Boolean(touched.firstName && errors.firstName)}
                fullWidth
                helperText={touched.firstName && errors.firstName}
                label="First name"
                margin="normal"
                name="firstName"
                onBlur={handleBlur}
                onChange={(event) => {
                  onChange(event, handleChange);
                }}
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                error={Boolean(touched.lastName && errors.lastName)}
                fullWidth
                helperText={touched.lastName && errors.lastName}
                label="Last name"
                margin="normal"
                name="lastName"
                onBlur={handleBlur}
                onChange={(event) => {
                  onChange(event, handleChange);
                }}
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
            onChange={(event) => {
              onChange(event, handleChange);
            }}
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
            onChange={(event) => {
              onChange(event, handleChange);
            }}
            value={values.mobileNumber}
            variant="outlined"
          />
          <Grid container spacing={2}>
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
                onChange={(event) => {
                  onChange(event, handleChange);
                }}
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
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
                onChange={(event) => {
                  onChange(event, handleChange);
                }}
                type={showPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
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
              onChange={(event) => {
                onChange(event, handleChange);
              }}
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
          <Box sx={{ pt: 2 }}>
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
          {showMessage
            ? (
              <Typography
                color={messageColor}
                variant="body1"
                style={{ marginTop: '2px', marginBottom: '10px' }}
              >
                {message}
              </Typography>
            )
            : (<Box style={{ height: '36px' }} />)}
        </form>
      )}
    </Formik>
  );
};

export default TalentSignUp;
