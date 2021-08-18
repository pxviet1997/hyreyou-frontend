import { Link } from 'react-router-dom';
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
  // image: {
  //   minHeight: '100vh',
  //   backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/banner/home-banner.jpg)`,
  // }
  banner: {
    // backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/banner/home-banner.jpg)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    // opacity: '50%',
    // background: 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5) )',
    width: '100%',
    position: 'absolute'
    // height: 'auto',
    // filter: '50%',
  },
  bannerContent: {
    paddingTop: '300px',
    paddingBottom: '198px',
  },
  darken: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    opacity: '50%'
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
          justifyContent: 'center'
        }}
      >
        <Box className={classes.banner}>
          {/* <div className={classes.darken} /> */}
          <Image
            aspectRatio={aspectRatio}
            src="static/images/banner/home-banner.jpg"
          />
          <ThemeProvider theme={createTheme({ typography: { fontSize: 50 } })}>
            <Typography
              color="common.white"
            >
              Hiring is difficult...
            </Typography>
          </ThemeProvider>
          <Container maxWidth="sm">
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  component={Link}
                  to="/login"
                  // color="primary"
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
                  component={Link}
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
      </Box>
    </>
  );
};

export default SplashScreen;
