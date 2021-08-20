import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import TalentProfileDetails from 'src/components/profile/TalentProfileDetails';
import TalentProfile from 'src/components/account/TalentProfile';

const TalentRegister = () => (
  <>
    <Helmet>
      <title>Talent Register</title>
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
          <Grid item lg={8} md={6} xs={12}>
            <TalentProfileDetails />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <TalentProfile />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default TalentRegister;
