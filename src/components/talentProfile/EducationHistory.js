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
import { removeEducationHistory, updateEducationHistory } from 'src/redux/actions/talentAction';
import { XCircle } from 'react-feather';
import RemoveModal from './modal/RemoveModal';

const EducationHistory = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const { user, userType, error } = data;
  const { education } = user;

  // const initialValues = education.length !== 0
  //   ? { education }
  //   : {
  //     education: [{
  //       nameOfUniversity: '',
  //       nameOfDegree: '',
  //       degreeDuration: ''
  //     }],
  //   };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const removePressed = () => {
    education.splice(currentIndex, 1);
    dispatch(removeEducationHistory({ _id: user._id, info: { education } }));
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
            initialValues={{ education }}
            enableReinitialize
            onSubmit={async (values) => {
              setIsEditing(false);
              dispatch(updateEducationHistory({ _id: user._id, info: values }));
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

                    <AddEducationModal open={open} setOpenAlert={setOpenAlert} setOpen={setOpen} id={user._id} />

                    <Grid container spacing={7}>
                      {values.education.map((value, index) => {
                        return (
                          <Grid key={value._id} item lg={12} md={12} xs={12}>
                            <RemoveModal open={openRemoveModal} setOpen={setOpenRemoveModal} setOpenAlert={setOpenAlert} removePressed={removePressed} />
                            <Grid container>
                              {isEditing
                                && (
                                  <Grid item lg={1}>
                                    <Button
                                      onClick={() => {
                                        setOpenRemoveModal(true);
                                        setCurrentIndex(index);
                                      }}
                                    >
                                      <XCircle color="red" />
                                    </Button>
                                  </Grid>
                                )}
                              <Grid container item spacing={2} lg={isEditing ? 11 : 12}>
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
