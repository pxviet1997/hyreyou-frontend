import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';

const PaymentInfo = () => (
  <>
    <Helmet>
      <title>Payment Information</title>
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
            <Card>
              <Grid container spacing={3}>
                <Grid item md={6} xs={8}>
                  <CardHeader subheader="Payment Information" title="Payment" />
                </Grid>
              </Grid>
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Account Name"
                      name="account_name"
                      onChange={{}}
                      required
                      value=""
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Account Number"
                      name="account_number"
                      onChange={{}}
                      required
                      value=""
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      name="expiry_date"
                      onChange={{}}
                      required
                      value=""
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="CSV"
                      name="csv"
                      onChange={{}}
                      required
                      value=""
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default PaymentInfo;
