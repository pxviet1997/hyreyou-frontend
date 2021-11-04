/* eslint-disable object-curly-newline */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CardContent,
  Modal,
  Typography,
  Grid,
  Button,
  Divider,
  Box
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

const RemoveModal = ({ open, setOpen, setOpenAlert, removePressed }) => {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const onCancelPressed = () => {
    setOpen(false);
  };

  const onRemovePressed = () => {
    // console.log(index);
    removePressed();
    setOpen(false);
    setOpenAlert(true);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CardContent sx={style}>
        <Typography
          variant="h3"
        >
          Do you want to remove this Job?
        </Typography>
        <Box sx={{ my: 3 }} />
        <Grid container spacing={2}>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={onCancelPressed}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={onRemovePressed}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Modal>
  );
};

export default RemoveModal;
