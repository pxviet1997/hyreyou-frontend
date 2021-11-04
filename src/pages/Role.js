import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider
} from '@material-ui/core';
import RoleCard from 'src/components/roleManagement/RoleCard';

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
            <RoleCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Role;
