/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Modal,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const SendOfferModal = ({ open, setOpenAlert, setOpen, userId }) => {
  const initialValues = {
    subject: '',
    message: '',
  };

  const handleClose = () => {
    setOpen(false);
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
          onSubmit={async (values) => {
            // dispatch(createRole({ _id: userId, skillSet, ...values }));
            // setOpen(false);
            // setOpenAlert(true);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            values,
          }) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item lg={12} md={12} xs={12}>
                      <Typography id="modal-modal-title" variant="h2" component="h2">
                        Add New Role
                      </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        onChange={handleChange}
                        required
                        value={values.description}
                        variant="outlined"
                        multiline
                        rows={15}
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
                        Send
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

export default SendOfferModal;
