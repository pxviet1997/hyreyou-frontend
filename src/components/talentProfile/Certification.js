/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { Box, Button, Container, Grid, TextField } from '@material-ui/core';
import { useState } from 'react';
import AddCertificationModal from '../modal/AddCertificationModal';

const Certification = () => {
  // console.log('[Certification]', { values });
  const [open, setOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Certification</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <AddCertificationModal open={open} setOpen={setOpen} />
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={() => setOpen(true)}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Certification;
