import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Offers from 'src/components/dashboard//Offers';
import Interviews from 'src/components/dashboard//Interviews';
import ViewedProfile from 'src/components/dashboard//ViewedProfile';
import Matches from 'src/components/dashboard//Matches';
// import Budget from 'src/components/dashboard//Budget';
// import LatestOrders from 'src/components/dashboard//LatestOrders';
// import LatestProducts from 'src/components/dashboard//LatestProducts';
// import Sales from 'src/components/dashboard//Sales';
// import TasksProgress from 'src/components/dashboard//TasksProgress';
// import TotalCustomers from 'src/components/dashboard//TotalCustomers';
// import TotalProfit from 'src/components/dashboard//TotalProfit';
// import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

const DashboardTalent = () => (
  <>
    <Helmet>
      <title>Dashboard Talent | Material Kit</title>
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
            <Offers />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <Interviews />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <ViewedProfile />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
            <Matches />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default DashboardTalent;
