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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const AddCertificationModal = ({ open, setOpen }) => {
  const [file, setFile] = useState();
  const [certificationName, setCertificationName] = useState();
  const handleClose = () => setOpen(false);

  const onSubmit = () => {
    console.log(file);
    console.log(certificationName);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CardContent sx={style}>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} xs={12}>
            <Typography id="modal-modal-title" variant="h2" component="h2">
              Add Certification
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <TextField
              fullWidth
              name="upload-photo"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <TextField
              fullWidth
              label="Name of Certification"
              name=""
              type="text"
              onChange={(e) => setCertificationName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={onSubmit}
            // type="submit"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Modal>
  );
};

export default AddCertificationModal;
