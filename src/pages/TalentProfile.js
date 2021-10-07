import { Helmet } from 'react-helmet';
import {
  Box, CardHeader, Container, Grid
} from '@material-ui/core';
import TalentProfileDetail from '../components/talentProfile/TalentProfileDetails';
import { useSelector } from 'react-redux';

const TalentProfile = () => {
  const { user, userType, error } = useSelector((state) => state.shared);

  const header = (
    <Box px={4}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={8}>
          <CardHeader title="Talent Profile" />
        </Grid>
      </Grid>
    </Box>
  );

  return (
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
              <TalentProfileDetail data={{ user, userType, error }} header={header} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TalentProfile;
