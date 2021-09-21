import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';

import TalentProfileDetails from '../components/talentProfile/TalentProfileDetails';

const TalentProfile = () => (
  <>
    <Helmet>
      <title>Talent Profile</title>
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
            <TalentProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default TalentProfile;
