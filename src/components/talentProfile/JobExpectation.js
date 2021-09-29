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
import { updatePersonalDetail } from 'src/redux/actions/talentAction';
import { clearMessage } from 'src/redux/actions/messageAction';
import { skills, availabilities } from './constant';
import { useTheme } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

const JobExpectation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { user, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const [skillSet, setSkillSet] = useState([]);
  const [expectedAvailability, setExpectedAvailability] = useState([]);
  const [salary, setSalary] = useState('');
  const [salaryType, setSalaryType] = useState('');
  const [workType, setWorkType] = useState('');
  const theme = useTheme();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        // width: '100%',
        // backgroundColor: 'red'
      },
    },
  };

  const getStyles = (name, personName) => {
    console.log(theme);
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };

  // const names = [
  //   'Oliver Hansen',
  //   'Van Henry',
  //   'April Tucker',
  //   'Ralph Hubbard',
  //   'Omar Alexander',
  //   'Carlos Abbott',
  //   'Miriam Wagner',
  //   'Bradley Wilkerson',
  //   'Virginia Andrews',
  //   'Kelly Snyder',
  // ];

  const onClick = () => {
    console.log(skillSet);
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
            <Grid item lg={6} md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="skill-set">Skill Set</InputLabel>
                <Select
                  labelId="skill-set"
                  multiple
                  value={skillSet}
                  onChange={(event) => {
                    const {
                      target: { value },
                    } = event;
                    setSkillSet(value);
                  }}
                  input={<OutlinedInput label="Skill Set" />}
                  MenuProps={MenuProps}
                >
                  {skills.map((skill) => (
                    <MenuItem
                      key={skill}
                      value={skill}
                      // style={getStyles(skill, values.skills, theme)}
                      style={{
                        fontWeight:
                          skillSet.indexOf(skill) === -1
                            ? 'normal'
                            : 'bold',
                      }}
                    >
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="availability">Availability</InputLabel>
                <Select
                  labelId="availability"
                  multiple
                  value={expectedAvailability}
                  onChange={(event) => {
                    const {
                      target: { value },
                    } = event;
                    setExpectedAvailability(value);
                  }}
                  input={<OutlinedInput label="Availability" />}
                  MenuProps={MenuProps}
                >
                  {availabilities.map((availability) => (
                    <MenuItem
                      key={availability}
                      value={availability}
                      // style={getStyles(skill, values.skills, theme)}
                      style={{
                        fontWeight:
                          availabilities.indexOf(availability) === -1
                            ? 'normal'
                            : 'bold',
                      }}
                    >
                      {availability}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="State"
                        name="address.state"
                        type="text"
                        value={values.address.state}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.address.state && errors.address && errors.address.state)}
                        helperText={isEditing && touched.address.state && errors.address && errors.address.state}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Postal Code"
                        name="address.postalCode"
                        type="text"
                        value={values.address.postalCode}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.address.postalCode && errors.address && errors.address.postalCode)}
                        helperText={isEditing && touched.address.postalCode && errors.address && errors.address.postalCode}
                        inputProps={{ readOnly: !isEditing, }}
                      />
                    </Grid> */}
          </Grid>
          {/* </form>
              );
            }}
          </Formik> */}
        </Container>
      </Box>
    </>
  );
};

export default JobExpectation;
