/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { Box, Button, Container, Grid, Table, TableBody, TableCell, TableRow, TextField } from '@material-ui/core';
import { useState } from 'react';
import AddCertificationModal from '../modal/AddCertificationModal';
import { useDispatch, useSelector } from 'react-redux';

const Certification = () => {
  // console.log('[Certification]', { values });
  const [open, setOpen] = useState(false);
  const disptach = useDispatch();
  const { user } = useSelector((state) => state.shared);

  console.log(user);

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
            <Grid item>
              <Table
                fullwidth
              >
                <TableBody>
                  {user.certifications && user.certifications.map((certification) => (
                    <TableRow>
                      <TableCell>{certification.name}</TableCell>
                      <TableCell>{certification.fileName}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Certification;
