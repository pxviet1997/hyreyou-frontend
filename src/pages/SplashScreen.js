import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import Image from 'material-ui-image';

const SplashScreen = () => {
  const navigate = useNavigate();
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

        <Container maxWidth="sm">
          <Box
            sx={{ pb: 1, pt: 3 }}
          />
          <Image
            src="/static/images/IMG_8134.jpeg"
            cover
          />

          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Button
                color="primary"
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
    </>
  );
};

export default SplashScreen;
