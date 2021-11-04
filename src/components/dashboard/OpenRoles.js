import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Container,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const OpenRoles = (props) => {
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
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item lg={12} md={12} xs={12} ml={3} mt={2}>
            <Typography
              color="textPrimary"
              varient="h2"
            >
              OPEN ROLES
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <Container maxWidth>
              <Table>
                <TableBody>
                  {user.roles.slice(0, 4).map((role) => (
                    <TableRow
                      hover
                      key={role._id}
                      onClick={() => navigate('../role/detail', { state: { role, type: 'talentIds' } })}
                    >
                      <TableCell>{role.title}</TableCell>
                      <TableCell>{role.talentIds.length}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Container>
          </Grid>
        </Grid>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mr: 4
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          <Link to="/business/role">View all</Link>
        </Button>
      </Box>
    </Card>
  );
};

export default OpenRoles;
