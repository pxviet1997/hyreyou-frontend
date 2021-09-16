import {
  Link, Link as RouterLink,
  useLocation, useNavigate
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import querystring from 'query-string';
import { useEffect, useState } from 'react';
import { reqChangePassword } from 'src/api';

const Forgot = () => {
  const navigate = useNavigate();
  const [forgotMessage, setForgotMessage] = useState('');
  const [forgotMessageColor, setForgotMessageColor] = useState('green');
  const [showMessage, setShowMessage] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [userType, setUserType] = useState('');
  const [_id, setId] = useState('initialState');
  const location = useLocation();

  useEffect(() => {
    const params = querystring.parse(location.search);
    const { id, type } = params;
    setId(id);
    setUserType(type);
  }, []);

  return (
    <>
      <Helmet>
        <title>Reset Passord | HyreYou</title>
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
              password: '',
              confirmPassword: ''
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string().max(255).required('New Password is required'),
              confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
            })}
            onSubmit={async (values) => {
              setForgotMessageColor('green');
              setShowMessage(true);
              const { password } = values;
              try {
                const response = await reqChangePassword({ _id, userType, password });
                setForgotMessage(response.message);
                setPasswordChanged(true);
              } catch (error) {
                setForgotMessageColor('red');
                setForgotMessage(error.message);
              }
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
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Reset Password
                  </Typography>
                </Box>
                {passwordChanged
                  ? (
                    <Typography
                      color={forgotMessageColor}
                      variant="body1"
                      style={{ marginTop: '2px', marginBottom: '10px' }}
                    >
                      {`${forgotMessage} Go to`}
                      {' '}
                      <Link
                        component={RouterLink}
                        to="/login"
                        variant="body1"
                      >
                        Sign in
                      </Link>
                    </Typography>
                  )
                  : (
                    <>
                      <TextField
                        error={Boolean(touched.password && errors.password)}
                        fullWidth
                        helperText={touched.password && errors.password}
                        label="Password"
                        margin="normal"
                        name="password"
                        onBlur={handleBlur}
                        onChange={(event) => {
                          handleChange(event);
                          setShowMessage(false);
                          setForgotMessage('');
                        }}
                        type="password"
                        value={values.password}
                        variant="outlined"
                      />
                      <TextField
                        error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                        fullWidth
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        label="Confirm Password"
                        margin="normal"
                        name="confirmPassword"
                        onBlur={handleBlur}
                        onChange={(event) => {
                          handleChange(event);
                          setShowMessage(false);
                          setForgotMessage('');
                        }}
                        type="password"
                        value={values.confirmPassword}
                        variant="outlined"
                      />
                      <Box sx={{ py: 2 }}>
                        <Button
                          color="primary"
                          disabled={isSubmitting}
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                        >
                          Reset password now
                        </Button>
                      </Box>
                      {showMessage
                        ? (
                          <Typography
                            color={forgotMessageColor}
                            variant="body1"
                            style={{ marginTop: '2px', marginBottom: '10px' }}
                          >
                            {forgotMessage}
                          </Typography>
                        )
                        : (<Box style={{ height: '36px' }} />)}
                    </>
                  )}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Forgot;
