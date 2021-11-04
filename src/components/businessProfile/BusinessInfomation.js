import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearMessage } from 'src/redux/actions/messageAction';
import { updateBusinessInformation } from 'src/redux/actions/businessAction';

const BusinessInformation = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const { error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const initialValues = {
    description: data.description || '',
    culturalInformation: data.culturalInformation || ''
  };

  const originalTouched = {
    description: false,
    culturalInformation: false
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    dispatch(clearMessage());
  }, []);
  return (
    <>
      <Helmet>
        <title>Business | Information</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          pt: 2
          // py: 3
        }}
      >
        <Container maxWidth="lg">
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={async (values) => {
              setIsEditing(!isEditing);
              const { _id } = data;
              dispatch(updateBusinessInformation({ _id, info: values }));
              setOpen(true);
              // console.log(values);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              setTouched
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Business Description"
                        name="description"
                        type="text"
                        value={values.description}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        multiline
                        rows={4}
                        // required
                        // error={Boolean(isEditing && touched.description && errors.businessName)}
                        // helperText={isEditing && touched.businessName && errors.businessName}
                        inputProps={{ readOnly: !isEditing, }}
                      // InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Cultural Information"
                        name="culturalInformation"
                        type="text"
                        value={values.culturalInformation}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        multiline
                        rows={4}
                        // required
                        // error={Boolean(isEditing && touched.businessABN && errors.businessABN)}
                        // helperText={isEditing && touched.businessABN && errors.businessABN}
                        inputProps={{ readOnly: !isEditing, }}
                      // InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container style={{ marginTop: 23 }} spacing={2}>
                    {/* {userType === 'Talent' && ( */}
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          setIsEditing(!isEditing);
                          setTouched(originalTouched, false);
                        }}
                      >
                        {!isEditing ? 'Edit' : 'Cancel'}
                      </Button>
                    </Grid>
                    {/* )} */}
                    {isEditing && (
                      <Grid item>
                        <Button
                          color="primary"
                          variant="contained"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Save
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                  <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }} variant="filled">
                      {message}
                    </Alert>
                  </Snackbar>
                </form>
              );
            }}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default BusinessInformation;
