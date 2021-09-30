import PropTypes from 'prop-types';
import { FieldArray, Formik } from 'formik';
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
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  skills,
  availabilities,
  salaryTypes,
  workTypes
} from './constant';
import DropDownMenu from './DropDownMenu';

const JobExpectation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { user, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const [expectedSkillSet, setExpectedSkillSet] = useState([]);
  const [expectedAvailability, setExpectedAvailability] = useState([]);
  const [expectedSalary, setExpectedSalary] = useState('');
  const [expectedSalaryType, setExpectedSalaryType] = useState([]);
  const [expectedWorkType, setExpectedWorkType] = useState([]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  const onClick = () => {
    console.log(expectedSkillSet);
  };

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
          <Grid container style={{ marginBottom: 40 }}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={onClick}
            >
              Save
            </Button>
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
      </Box>
    </>
  );
};

export default JobExpectation;
