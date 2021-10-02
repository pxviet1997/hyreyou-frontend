import PropTypes from 'prop-types';
import { FieldArray, Formik } from 'formik';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import {
  Box, Container, Grid, TextField, Button, Snackbar, Alert,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  skills,
  availabilities,
  salaryTypes,
  workTypes
} from './constant';
import DropDownMenu from './DropDownMenu';
import { reqUpdate } from 'src/api';
import { updateJobExpectation } from 'src/redux/actions/talentAction';
import { clearMessage } from 'src/redux/actions/messageAction';

const JobExpectation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { user, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const [expectedSkillSet, setExpectedSkillSet] = useState(user.expectedSkillSet ? user.expectedSkillSet : []);
  const [expectedAvailability, setExpectedAvailability] = useState(user.expectedAvailability ? user.expectedAvailability : []);
  const [expectedSalary, setExpectedSalary] = useState(user.expectedSalary ? user.expectedSalary : '');
  const [expectedSalaryType, setExpectedSalaryType] = useState(user.expectedSalaryType ? user.expectedSalaryType : []);
  const [expectedWorkType, setExpectedWorkType] = useState(user.expectedWorkType ? user.expectedWorkType : []);

  const onClick = async () => {
    try {
      dispatch(updateJobExpectation({
        _id: user._id,
        info: {
          expectedWorkType, expectedAvailability, expectedSalaryType, expectedSkillSet, expectedSalary
        }
      }));
      setIsEditing(false);
      setOpenAlert(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() => {
    return dispatch(clearMessage());
  }, []);

  return (
    <>
      <Helmet>
        <title>Talent | Personal Details</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          pt: 2
        }}
      >
        <Container maxWidth="lg">
          <Grid container style={{ marginBottom: 40 }} spacing={2}>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                onClick={() => setIsEditing(!isEditing)}
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
                    onClick={onClick}
                  >
                    Save
                  </Button>
                </Grid>
              )}
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} xs={12}>
              <DropDownMenu
                value={expectedSkillSet}
                setValue={setExpectedSkillSet}
                values={skills}
                label="Skill Set"
                readOnly={!isEditing}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <DropDownMenu
                value={expectedAvailability}
                setValue={setExpectedAvailability}
                values={availabilities}
                label="Availability"
                readOnly={!isEditing}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <DropDownMenu
                value={expectedWorkType}
                setValue={setExpectedWorkType}
                values={workTypes}
                label="Work Type"
                readOnly={!isEditing}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <DropDownMenu
                value={expectedSalaryType}
                setValue={setExpectedSalaryType}
                values={salaryTypes}
                label="Salary Type"
                readOnly={!isEditing}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                fullWidth
                label="Salary"
                type="text"
                value={expectedSalary}
                variant="outlined"
                onChange={(event) => setExpectedSalary(event.target.value)}
                inputProps={{ readOnly: !isEditing }}
              />
            </Grid>
          </Grid>
        </Container>
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
      </Box>
    </>
  );
};

export default JobExpectation;
