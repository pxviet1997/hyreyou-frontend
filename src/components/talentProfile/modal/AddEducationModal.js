/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Modal,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addEducationHistory } from 'src/redux/actions/talentAction';
import { clearMessage } from 'src/redux/actions/messageAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const AddEducationModal = ({ open, setOpenAlert, setOpen, id }) => {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const initialValues = {
    nameOfUniversity: '',
    nameOfDegree: '',
    degreeDuration: ''
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CardContent sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            nameOfUniversity: Yup.string().max(255).required('Name of Institute is required'),
            nameOfDegree: Yup.string().max(255).required('Name of Degree is required'),
            degreeDuration: Yup.string().max(255).required('Duration is required'),
          })}
          onSubmit={async (values) => {
            dispatch(clearMessage());
            dispatch(addEducationHistory(id, values));
            setOpen(false);
            setOpenAlert(true);
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
            // console.log(values);
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item lg={12} md={12} xs={12}>
                      <Typography id="modal-modal-title" variant="h2" component="h2">
                        Add Education
                      </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Name of Education Insitute"
                        name="nameOfUniversity"
                        type="text"
                        value={values.nameOfUniversity}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={Boolean(touched.nameOfUniversity && errors.nameOfUniversity)}
                        helperText={touched.nameOfUniversity && errors.nameOfUniversity}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Name of Degree"
                        name="nameOfDegree"
                        type="text"
                        value={values.nameOfDegree}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={Boolean(touched.nameOfDegree && errors.nameOfDegree)}
                        helperText={touched.nameOfDegree && errors.nameOfDegree}
                      />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Duration"
                        name="degreeDuration"
                        type="text"
                        value={values.degreeDuration}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={Boolean(touched.degreeDuration && errors.degreeDuration)}
                        helperText={touched.degreeDuration && errors.degreeDuration}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </>
            );
          }}
        </Formik>
      </CardContent>
    </Modal>
  );
};

export default AddEducationModal;
