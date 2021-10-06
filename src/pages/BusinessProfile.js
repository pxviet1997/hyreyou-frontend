import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import BusinessProfileDetails from 'src/components/businessProfile/BusinessProfileDetails';
import { useSelector } from 'react-redux';

const BusinessProfile = () => {
  const { user } = useSelector((state) => state.shared);

  return (
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
              <BusinessProfileDetails data={user} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BusinessProfile;
