/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Modal,
  Typography
} from '@material-ui/core';
import { reqUpdateCertification } from 'src/api/index';

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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.shared);

  const onSubmit = async () => {
    console.log(file);
    console.log(certificationName);

    const formData = new FormData();
    formData.append('_id', user._id); // FIXME: change this to logged in user id
    formData.append('certification', file, file.name);
    formData.append('certificationName', certificationName);

    await reqUpdateCertification(formData);
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
              inputProps={{ accept: '.doc,.docx,.pdf' }}
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
