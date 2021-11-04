import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { useEffect, useState } from 'react';
// import { reqSignUp } from 'src/api';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { resetError, signUp } from 'src/redux/actions/authAction';
import { clearMessage } from 'src/redux/actions/messageAction';
import TalentSignUp from 'src/components/signUp/TalentSignUp';
import BusinessSignUp from 'src/components/signUp/BusinessSignUp';

const SignUp = () => {
  const [userType, setUserType] = useState('Talent');
  const [onNext, setOnNext] = useState(false);
  const dispatch = useDispatch();

  const onUserChange = (event) => {
    setUserType(event.target.value);
  };

  const onNextClicked = () => {
    setOnNext(true);
    // if (userType === 'Talent') {
    //   setOnNext(true);
    // } else {
    //   setOnNext(false);
    // }
  };

  const onBackClicked = () => {
    setOnNext(false);
  };

  useEffect(() => {
    return dispatch(clearMessage());
  }, []);

  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Grid
        container
        sx={{ minHeight: '100%', backgroundColor: 'background.default', }}
      >
        <Grid
          item
          lg={4}
          sx={{ backgroundImage: 'url(static/images/banner/home-banner.jpg)' }}
        />
        <Grid
          item
          lg={8}
        >
          <Container
            maxWidth="sm"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              height: '100%',
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {onNext
                && (
                  <Button
                    variant="contained"
                    sx={{ marginRight: 2 }}
                    onClick={onBackClicked}
                  >
                    Back
                  </Button>
                )}
              <Typography
                color="textPrimary"
                variant="h2"
              >
                Sign Up
                {onNext && ` as ${userType}`}
              </Typography>
            </Box>

            {!onNext
              && (
                <Box>
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
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={onNextClicked}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              )}
            {userType === 'Talent' && onNext
              && (
                <TalentSignUp />
              )}
            {userType === 'Business' && onNext
              && (
                <BusinessSignUp />
              )}
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
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
