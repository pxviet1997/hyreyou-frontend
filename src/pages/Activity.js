import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Divider,
  Grid,
  Card,
  CardHeader,
  Typography
} from '@material-ui/core';

const Activity = () => (
  <>
    <Helmet>
      <title>Activity</title>
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
            <Card>
              <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12}>
                  <CardHeader subheader="User Activity" title="Activity" />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sx={{ marginLeft: 2 }}>
                  <Typography>No new activity</Typography>
                </Grid>
              </Grid>
              <Divider />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Activity;
