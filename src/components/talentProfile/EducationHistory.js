/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Snackbar,
  Alert
} from '@material-ui/core';
import { Formik } from 'formik';
import AddEducationModal from './modal/AddEducationModal';
import { updateEducationHistory } from 'src/redux/actions/talentAction';

const EducationHistory = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { userType, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const { education } = data;
  const initialValues = education.length !== 0
    ? { education }
    : {
      education: [{
        nameOfUniversity: '',
        nameOfDegree: '',
        degreeDuration: ''
      }],
    };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <Helmet>
        <title>Education History</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              setIsEditing(false);
              // dispatch(updateJobHistory({ _id: user._id, info: values }));
              dispatch(updateEducationHistory({ _id: data._id, info: values }));
              setOpenAlert(true);
            }}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              values,
            }) => {
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    {userType === 'Talent'
                      && (
                        <Grid container style={{ marginBottom: 40 }} spacing={2}>
                          <Grid item>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() => {
                                setIsAdding(false);
                                setIsEditing(!isEditing);
                                // setTouched(originalTouched, false);
                              }}
                            >
                              {!isEditing ? 'Edit' : 'Cancel'}
                            </Button>
                          </Grid>
                          {isEditing
                            && (
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
                          {!isEditing
                            && (
                              <Grid item>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  onClick={() => {
                                    // setTouched(originalTouched, false);
                                    setIsAdding(!isAdding);
                                    setOpen(true);
                                  }}
                                >
                                  Add
                                </Button>
                              </Grid>
                            )}
                        </Grid>
                      )}

                    <AddEducationModal open={open} setOpenAlert={setOpenAlert} setOpen={setOpen} id={data._id} />

                    <Grid container spacing={7}>
                      {values.education.map((value, index) => {
                        return (
                          <Grid key={value._id} item lg={12} md={12} xs={12}>
                            <Grid container spacing={2}>
                              <Grid item lg={12} md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Name of Education Insitute"
                                  name={`education[${index}]nameOfUniversity`}
                                  type="text"
                                  value={value.nameOfUniversity}
                                  variant="outlined"
                                  onChange={handleChange}
                                  onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                  required
                                  inputProps={{ readOnly: !isEditing, }}
                                />
                              </Grid>
                              <Grid item lg={12} md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Name of Degree"
                                  name={`education[${index}]nameOfDegree`}
                                  type="text"
                                  value={value.nameOfDegree}
                                  variant="outlined"
                                  onChange={handleChange}
                                  onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                  required
                                  inputProps={{ readOnly: !isEditing, }}
                                />
                              </Grid>
                              <Grid item lg={12} md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Duration"
                                  name={`education[${index}]degreeDuration`}
                                  type="text"
                                  value={value.degreeDuration}
                                  variant="outlined"
                                  onChange={handleChange}
                                  onBlur={(event) => { if (isEditing) handleBlur(event); }}
                                  required
                                  inputProps={{ readOnly: !isEditing, }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </form>
                </>
              );
            }}
          </Formik>
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
        </Container>
      </Box>
    </>
  );
};

export default EducationHistory;

// EducationHistory.propTypes = {
//   isEditForm: PropTypes.bool,
//   values: PropTypes.shape({
//     education: PropTypes.arrayOf({
//       id: PropTypes.string,
//       nameOfUniversity: PropTypes.string,
//       nameOfDegree: PropTypes.string,
//       degreeDuration: PropTypes.string
//     })
//   }),
//   handleChange: PropTypes.func,
//   handleBlur: PropTypes.func,
//   errors: PropTypes.object,
//   touched: PropTypes.object
// };
