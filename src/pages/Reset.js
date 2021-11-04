import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { reqReset } from 'src/api';
import { useState } from 'react';

const Reset = () => {
  const [loginMessage, setLoginMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [loginMessageColor, setLoginMessageColor] = useState('green');
  // const { userType } = useParams();

  return (
    <>
      <Helmet>
        <title>Reser Password | Material Kit</title>
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
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            })}
            onSubmit={async (values) => {
              console.log('hi');
              setShowMessage(true);
              try {
                const { message } = await reqReset({ email: values.email });
                setLoginMessage(message);
              } catch (error) {
                setLoginMessage(error.message);
                setLoginMessageColor('red');
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
                    Reset Pasword
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Enter email address to reset password
                  </Typography>
                </Box>

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setShowMessage(false);
                    setLoginMessageColor('green');
                  }}
                  type="email"
                  value={values.email}
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
                    Send password reset email
                  </Button>
                </Box>
                {showMessage
                  ? (
                    <Typography
                      color={loginMessageColor}
                      variant="body1"
                      style={{ marginTop: '2px', marginBottom: '10px' }}
                    >
                      {loginMessage}
                    </Typography>
                  )
                  : (<Box style={{ height: '36px' }} />)}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Reset;
