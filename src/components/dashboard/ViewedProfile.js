import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';

const ViewedProfile = (props) => (
  <Card
    sx={{ height: '350px' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item lg={12}>
          <Typography
            color="textPrimary"
            varient="h2"
          >
            VIEWED PROFILE
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <Typography
            color="textPrimary"
          // varient="h2"
          >
            Work in Progress
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default ViewedProfile;
