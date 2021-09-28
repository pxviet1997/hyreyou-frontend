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
import { skills } from './constant';

const JobExpectation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { user, error } = useSelector((state) => state.shared);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const [skillSet, setSkillSet] = useState([]);

  const initialValues = {
    skills: [],
    availability: [],
    salary: '',
    salaryType: []
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
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

  console.log(skillSet);

  return (
    <>
      <Helmet>
        <title>Talent | Personal Details</title>
      </Helmet>
      <Box
        sx={{
          minHeight: '100%',
          pt: 2
          // py: 3
        }}
      >
        <Container maxWidth="lg">
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({

            })}
            onSubmit={async (values) => {
              console.log(values);
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
              return (
                <form onSubmit={handleSubmit}>
                  <Grid container style={{ marginBottom: 40 }} spacing={2}>
                    <Grid item lg={4} md={4} xs={12}>
                      <FieldArray
                        name="skills"
                        render={(arrayHelpers) => {
                          return (
                            <FormControl>
                              <InputLabel id="skill-set">Skill Set</InputLabel>
                              <Select
                                labelId="skill-set"
                                multiple
                                value={values.skills}
                                onChange={(event) => {
                                  const {
                                    target: { value },
                                  } = event;
                                  console.log(value);
                                  arrayHelpers.push(value[0]);

                                  console.log(values.skills);
                                  // setSkillSet(
                                  //   // On autofill we get a the stringified value.
                                  //   typeof value === 'string' ? value.split(',') : value,
                                  // );
                                }}
                                // onChange={handleChange}
                                input={<OutlinedInput label="Skill Set" />}
                                MenuProps={MenuProps}
                              >
                                {skills.map((skill) => (
                                  <MenuItem
                                    key={skill}
                                    value={skill}
                                  // style={getStyles(name, personName, theme)}
                                  >
                                    {skill}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          );
                        }}
                      />

                      {/* <TextField
                        fullWidth
                        label="Skill Set"
                        name="address.streetName"
                        type="text"
                        value={values.address.streetName}
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={(event) => { if (isEditing) handleBlur(event); }}
                        required
                        error={Boolean(isEditing && touched.address.streetName && errors.address && errors.address.streetName)}
                        helperText={isEditing && touched.address.streetName && errors.address && errors.address.streetName}
                        inputProps={{ readOnly: !isEditing, }}
                      /> */}
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
                </form>
              );
            }}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default JobExpectation;
