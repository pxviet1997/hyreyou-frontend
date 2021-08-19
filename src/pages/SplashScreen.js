import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  ThemeProvider
} from '@material-ui/core';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  banner: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    width: '100%',
    // position: 'relative'
  },
  bannerContent: {
    paddingTop: '300px',
    paddingBottom: '198px',
  },
  text: {
    position: 'absolute'
  }

}));

const SplashScreen = () => {
  const classes = useStyles();
  const aspectRatio = 1920 / 751;

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
              <p>HIRING IS DIFFICULT...</p>
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
          <Grid container spacing={5}>
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
