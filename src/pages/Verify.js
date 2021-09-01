import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Container,
  Typography
} from '@material-ui/core';
import { useEffect } from 'react';
import { reqVerifyEmail } from 'src/api';
import querystring from 'query-string';

const Verify = () => {
  const location = useLocation();

  useEffect(async () => {
    const params = querystring.parse(location.search);
    console.log(params);
    const { id, userType } = params;
    // await reqVerifyEmail({ _id, userType });
    // console.log(id);
  }, []);

  return (
    <>
      <Helmet>
        <title>Email Verification | Material Kit</title>
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
          <Box sx={{ mb: 3 }}>
            <Typography
              color="textPrimary"
              variant="h2"
            >
              Email Verification successfull!
            </Typography>
          </Box>
          <div width="1400">
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                component={RouterLink}
                to="/login"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </Box>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Verify;
