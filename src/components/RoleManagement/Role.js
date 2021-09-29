import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider
} from '@material-ui/core';
import RoleCardDetails from 'src/components/RoleManagement/roleCardContent/RoleCardDetails';

const Role = () => (
  <>
    <Helmet>
      <title>Role</title>
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
            <RoleCardDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Role;
