import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

const SplashScreen = () => {
  // const { isLoggedIn, userType } = useSelector((state) => state.auth);

  return (
    <>
      <Helmet>
        <title>HyreYou</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <img
            src="static/images/banner/home-banner.jpg"
            alt="HyreYou"
            style={{
              width: '100%',
              position: 'absolute',
              filter: 'brightness(50%)'
            }}
          />

          <Container>
            <Typography
              color="common.white"
              style={{
                position: 'absolute',
                top: '150px',
                left: '20%',
                fontSize: 50,
                fontWeight: 600
              }}
            >
              HIRING IS DIFFICULT...
            </Typography>

            <Typography
              color="common.white"
              style={{
                position: 'absolute',
                top: '205px',
                left: '20%',
                fontSize: 48.4,
                fontWeight: 200,
              }}
            >
              FINDING A JOB IS JUST AS BAD
            </Typography>

            <Typography
              color="common.white"
              style={{
                position: 'absolute',
                top: '278px',
                left: '20%',
                fontSize: 14,
                fontWeight: 490
              }}
            >
              Create your seemless connections here and start working quicker
            </Typography>

          </Container>
        </Box>
        <Container maxWidth="md" style={{ marginTop: '600px' }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Button
                component={RouterLink}
                to="/login"
                fullWidth
                size="large"
                variant="contained"
                data-testid="loginBtn"
              >
                Sign In
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Button
                component={RouterLink}
                to="/register"
                fullWidth
                size="large"
                variant="contained"
                data-testid="signupBtn"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* </Box> */}
    </>
  );
};

export default SplashScreen;
