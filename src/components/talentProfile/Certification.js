/* eslint-disable object-curly-newline */
import { Helmet } from 'react-helmet';
import { Alert, Box, Button, Container, Grid, Snackbar, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { useState } from 'react';
import AddCertificationModal from './modal/AddCertificationModal';
import { BASE_URL } from 'src/api';

const Certification = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { user, userType, error, message } = data;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

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
          <AddCertificationModal open={open} setOpen={setOpen} setOpenAlert={setOpenAlert} />
          <Grid container spacing={3}>
            {userType === 'Talent'
              && (
                <Grid container item spacing={2}>
                  <Grid item>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Edit
                    </Button>
                  </Grid>
                  <Grid item>
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
              )}
            <Grid item lg={12} md={12} xs={12}>
              <Table style={{ width: '100%' }}>
                <TableBody>
                  {user.certifications && user.certifications.map((certification) => (
                    <TableRow>
                      <TableCell>{certification.name}</TableCell>
                      <TableCell align="right">
                        <a href={`${BASE_URL}/talent/download/?_id=${user._id}&&certificationId=${certification._id}`}>{certification.fileName}</a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Container>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }} variant="filled">
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Certification;
