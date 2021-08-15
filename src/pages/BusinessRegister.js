import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import BusinessProfileDetails from 'src/components/profile/BusinessProfileDetails';
import BusinessProfile from 'src/components/account/BusinessProfile';

const BusinessRegister = () => (
  <>
    <Helmet>
      <title>Business Register</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <BusinessProfileDetails />
          </Grid>
          {/* <Grid item lg={4} md={6} xs={12}>
            <BusinessProfile />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  </>
);

export default BusinessRegister;
