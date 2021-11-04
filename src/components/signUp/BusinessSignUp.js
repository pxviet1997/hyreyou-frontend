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

const BusinessSignUp = () => {
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
        businessName: '',
        businessABN: '',
        email: '',
        contactNumber: '',
        address: {
          country: '',
          city: '',
          streetName: '',
          state: '',
          postalCode: ''
        }
      }}
      enableReinitialize
      validationSchema={Yup.object().shape({
        businessName: Yup.string().max(255).required('Business Name is required'),
        businessABN: Yup.string().max(255).required('Business ABN is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        contactNumber: Yup.string().max(255).required('Contact Number is required'),
        address: Yup.object().shape({
          country: Yup.string().max(255).required('Country is required'),
          city: Yup.string().max(255).required('City is required'),
          streetName: Yup.string().max(255).required('Street Name is required'),
          state: Yup.string().max(255).required('State is required'),
          postalCode: Yup.string().max(255).required('Postal Code is required'),
        }),
      })}
      onSubmit={async (values) => {
        const { policy, confirmPassword, ...newUser } = values;
        setShowMessage(true);
        dispatch(signUp({ ...newUser, userType: 'Business' }));
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                margin="normal"
                fullWidth
                label="Business Name"
                name="businessName"
                type="text"
                value={values.businessName}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={Boolean(touched.businessName && errors.businessName)}
                helperText={touched.businessName && errors.businessName}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                margin="normal"
                fullWidth
                label="Business ABN"
                name="businessABN"
                type="text"
                value={values.businessABN}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={Boolean(touched.businessABN && errors.businessABN)}
                helperText={touched.businessABN && errors.businessABN}
              />
            </Grid>
          </Grid>
          {/* <Grid item lg={12} md={12} xs={12}> */}
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={values.email}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          // InputLabelProps={{ shrink: true }}
          />
          {/* </Grid> */}
          {/* <Grid item lg={12} md={12} xs={12}> */}
          <TextField
            margin="normal"
            fullWidth
            label="Contact Number"
            name="contactNumber"
            type="text"
            value={values.contactNumber}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={Boolean(touched.contactNumber && errors.contactNumber)}
            helperText={touched.contactNumber && errors.contactNumber}
          // InputLabelProps={{ shrink: true }}
          />
          {/* </Grid> */}
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                margin="normal"
                fullWidth
                label="Country"
                name="address.country"
                type="text"
                value={values.address.country}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={Boolean(touched.address && touched.address.country && errors.address && errors.address.country)}
                helperText={touched.address && touched.address.country && errors.address && errors.address.country}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                margin="normal"
                fullWidth
                label="City"
                name="address.city"
                type="text"
                value={values.address.city}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={Boolean(touched.address && touched.address.city && errors.address && errors.address.city)}
                helperText={touched.address && touched.address.city && errors.address && errors.address.city}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={5} md={4} xs={12}>
              <TextField
                margin="normal"
                fullWidth
                label="Street Name"
                name="address.streetName"
                type="text"
                value={values.address.streetName}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={Boolean(touched.address && touched.address.streetName && errors.address && errors.address.streetName)}
                helperText={touched.address && touched.address.streetName && errors.address && errors.address.streetName}
              />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                margin="normal"
                fullWidth
                label="State"
                name="address.state"
                type="text"
                value={values.address.state}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={Boolean(touched.address && touched.address.state && errors.address && errors.address.state)}
                helperText={touched.address && touched.address.state && errors.address && errors.address.state}
              />
            </Grid>
            <Grid item lg={3} md={4} xs={12}>
              <TextField
                margin="normal"
                fullWidth
                label="Postcode"
                name="address.postalCode"
                type="text"
                value={values.address.postalCode}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={Boolean(touched.address && touched.address.postalCode && errors.address && errors.address.postalCode)}
                helperText={touched.address && touched.address.postalCode && errors.address && errors.address.postalCode}
              />
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
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
          {
            Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>
                {errors.policy}
              </FormHelperText>
            )
          }
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
          {
            showMessage
              ? (
                <Typography
                  color={messageColor}
                  variant="body1"
                  style={{ marginTop: '2px', marginBottom: '10px' }}
                >
                  {message}
                </Typography>
              )
              : (<Box style={{ height: '36px' }} />)
          }
          {/* <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }} variant="filled">
                {message}
              </Alert>
            </Snackbar> */}
        </form>
      )}
    </Formik>
  );
};

export default BusinessSignUp;
