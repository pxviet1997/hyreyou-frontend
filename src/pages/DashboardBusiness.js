import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Role from 'src/components/dashboard/OpenRoles';
import ShortList from 'src/components/dashboard/ShortList';
import Interview from 'src/components/dashboard/Interview';
import Contractor from 'src/components/dashboard/Contractor';

const DashboardBusiness = () => (
  <>
    <Helmet>
      <title>Dashboard Business</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <Role />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <ShortList />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <Interview />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <Contractor />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default DashboardBusiness;
