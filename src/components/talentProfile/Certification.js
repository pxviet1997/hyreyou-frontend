/* eslint-disable object-curly-newline */
import { Helmet } from 'react-helmet';
import { Box, Button, Container, Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { useState } from 'react';
import AddCertificationModal from './modal/AddCertificationModal';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from 'src/api';

const Certification = ({ data }) => {
  const [open, setOpen] = useState(false);
  // const disptach = useDispatch();
  const { user, userType, error } = data;

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
            {userType === 'Talent'
              && (
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
      </Box>
    </>
  );
};
export default Certification;
