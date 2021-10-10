import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const ShortList = (props) => {
  const { user } = useSelector((state) => state.shared);
  const navigate = useNavigate();
  return (
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
          <Grid item>
            <PerfectScrollbar>
              <Box sx={{ minWidth: 800 }}>
                <Table>
                  <TableBody>
                    {user.roles.map((roles) => (
                      <TableRow
                        hover
                        key={roles._id}
                      >
                        <TableCell>
                          {roles.title}
                        </TableCell>
                        <TableCell>
                          {[roles.shortlistTalentId].length}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
          </Grid>
        </Grid>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
          // onClick={() => {
          //   // navigate('role');
          // }}
        >
          <Link to="/business/short-list">
            View all
          </Link>
        </Button>
      </Box>
    </Card>
  );
};

export default ShortList;
