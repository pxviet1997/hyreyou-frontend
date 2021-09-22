import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles((theme) => ({
//  container: {
//    display: 'flex'
//  },
//  item: {
//    flexBasis: '40%',
//    maxWidth: '40%'
//  },
//  itemFlexGrow: {
//    flexGrow: 1,
//  },
// }));

const ShortList = (props) => (
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
        <Grid item>
          <Typography
            color="textPrimary"
            varient="h2"
          >
            SHORT LISTS
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default ShortList;
