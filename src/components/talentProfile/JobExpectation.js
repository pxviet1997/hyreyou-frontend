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
import { reqUpdateTalent } from 'src/api';
import { updateJobExpectation } from 'src/redux/actions/talentAction';
import { clearMessage } from 'src/redux/actions/messageAction';

const JobExpectation = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { userType, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const [expectedSkillSet, setExpectedSkillSet] = useState(data.expectedSkillSet ? data.expectedSkillSet : []);
  const [expectedAvailability, setExpectedAvailability] = useState(data.expectedAvailability ? data.expectedAvailability : []);
  const [expectedSalary, setExpectedSalary] = useState(data.expectedSalary ? data.expectedSalary : '');
  const [expectedSalaryType, setExpectedSalaryType] = useState(data.expectedSalaryType ? data.expectedSalaryType : []);
  const [expectedWorkType, setExpectedWorkType] = useState(data.expectedWorkType ? data.expectedWorkType : []);

  const onClick = async () => {
    try {
      dispatch(updateJobExpectation({
        _id: data._id,
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
          {userType === 'Talent'
            && (
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
            )}
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
