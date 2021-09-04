/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import API from 'src/services';
import { validationSchema } from 'src/utils';
import Certification from './Certification';
import EducationHistory from './EducationHistory';
import JobExpectation from './JobExpectation';
import JobHistory from './JobHistory';
import PersonalDetails from './PersonalDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
    // backgroundColor: theme.palette.background.paper
  }
}));

const normalizeData = (values) => {
  console.log({ values });
  return {
    _id: values._id,
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    mobileNumber: values.mobileNumber,
    address: {
      streetName: values.streetName,
      city: values.city,
      state: values.state,
      country: values.country,
      postalCode: values.postalCode
    },
    jobHistory: [
      {
        companyName: values.companyName,
        jobPosition: values.jobPosition,
        jobDescription: values.jobDescription,
        yearOfExperience: values.yearOfExperience
      }
    ],
    education: [
      {
        nameOfUniversity: values.nameOfUniversity,
        nameOfDegree: values.nameOfDegree,
        degreeDuration: values.degreeDuration
      }
    ],
    skills: values.skills,
    culturalPreferences: values.culturalPreferences
  };
};

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
  streetName: '',
  city: '',
  state: '',
  country: '',
  postalCode: '',
  jobHistory: [
    {
      companyName: '',
      jobPosition: '',
      jobDescription: '',
      yearOfExperience: ''
    }
  ],
  education: [
    {
      nameOfUniversity: '',
      nameOfDegree: '',
      degreeDuration: ''
    }
  ],
  skills: [],
  culturalPreferences: []
};

const TalentProfileDetails = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [talentForm, setTalentForm] = useState(null);
  const [isNewForm, setNewForm] = useState(true);
  const [isEditForm, setIsEditForm] = useState(false);

  const handleEdit = (edit) => {
    if (edit) {
      setValue(0);
    }
    setIsEditForm(edit);
  };

  const isLastStep = () => value === 4; // TODO: change this dynamic

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTalentProfile = async () => {
    try {
      const response = await API.get('/talent');
      const { data } = response;
      console.log({ data });

      if (!data || !data.length) {
        setNewForm(true);
        setIsEditForm(true);
        return;
      }

      setNewForm(false);
      const {
        _id,
        firstName,
        lastName,
        email,
        mobileNumber,
        address: { streetName, city, state, country, postalCode } = {},
        jobHistory,
        education,
        skills,
        culturalPreferences,
        ...rest
      } = data[0];

      console.log({
        firstName,
        lastName,
        email,
        mobileNumber,
        streetName,
        city,
        state,
        country,
        postalCode,
        jobHistory,
        education,
        skills,
        culturalPreferences
      });

      setTalentForm({
        _id,
        firstName,
        lastName,
        email,
        mobileNumber,
        streetName,
        city,
        state,
        country,
        postalCode,
        jobHistory,
        education,
        skills,
        culturalPreferences
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateForm = async (values) => {
    try {
      const body = normalizeData(values);
      body.password = 'test'; // TODO:
      console.log({ body });
      const response = await API.post('/talent', body);
      const { data } = response;
      console.log({ data });
      alert('created talent profile');
    } catch (error) {
      console.log(error);
      alert(`something went wrong with creating new profile${error.message}`);
    }
  };

  const handleUpdateForm = async (values) => {
    try {
      const body = normalizeData(values);
      body.password = 'test'; // TODO:
      console.log({ body });
      const response = await API.post(`/talent/update?_id=${body._id}`, body);
      const { data } = response;
      console.log({ data });
      alert('updated talent profile');
    } catch (error) {
      console.log(error);
      alert(`something went wrong with updating profile${error.message}`);
    }
  };

  useEffect(() => {
    getTalentProfile();
  }, []);

  return (
    <Formik
      initialValues={talentForm || initialValues}
      validationSchema={validationSchema.talentProfileFormSchema}
      enableReinitialize
      onSubmit={async (values) => {
        console.log({ values });
        if (isLastStep()) {
          if (!isEditForm) return;
          if (isNewForm) {
            await handleCreateForm(values);
          } else {
            await handleUpdateForm(values);
          }
        } else {
          setValue((s) => s + 1);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => {
        console.log({ errors });
        return (
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            noValidate
            {...props}
          >
            <Card>
              <Grid container spacing={3}>
                <Grid item md={6} xs={8}>
                  <CardHeader subheader="Profile" title="Talent Profile" />
                </Grid>

                <Grid item md={6} xs={4}>
                  <div
                    style={{
                      padding: 16,
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}
                  >
                    {!isNewForm && (
                      <Button
                        disabled={isSubmitting}
                        onClick={() => handleEdit(true)}
                        variant="outlined"
                      >
                        Edit
                      </Button>
                    )}
                  </div>
                </Grid>
              </Grid>
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <div className={classes.root}>
                    <Tabs
                      value={value}
                      onChange={handleTabChange} // TODO: check this should allow when form is locked
                      indicatorColor="primary"
                      textColor="primary"
                    >
                      <Tab label="Personal" />
                      <Tab label="Job History" />
                      <Tab label="Education History" />
                      <Tab label="Certification" />
                      <Tab label="Job Expectation" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                      <PersonalDetails
                        isEditForm={!isEditForm}
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                      />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <JobHistory
                        isEditForm={!isEditForm}
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                      />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <EducationHistory
                        isEditForm={!isEditForm}
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                      />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      <Certification
                        isEditForm={!isEditForm}
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                      />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                      <JobExpectation
                        isEditForm={!isEditForm}
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                      />
                    </TabPanel>
                  </div>
                </Grid>
              </CardContent>
              <Divider />
              <Grid
                container
                spacing={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 2
                }}
              >
                <Grid item>
                  {Boolean(Object.keys(errors).length) && (
                    <p style={{ color: 'red' }}>
                      * Please fill the requried field
                    </p>
                  )}
                </Grid>
                {value > 0 ? (
                  <Grid item>
                    <Button
                      disabled={!isEditForm || isSubmitting}
                      variant="contained"
                      color="primary"
                      onClick={() => setValue((s) => s - 1)}
                    >
                      Back
                    </Button>
                  </Grid>
                ) : null}
                <Grid item>
                  {isLastStep() ? (
                    <Button
                      startIcon={
                        isSubmitting ? <CircularProgress size="1rem" /> : null
                      }
                      disabled={!isEditForm || isSubmitting}
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      {isSubmitting ? 'Submitting' : 'Submit'}
                    </Button>
                  ) : (
                    <Button
                      disabled={!isEditForm || isSubmitting}
                      variant="contained"
                      color="primary"
                      onClick={() => setValue((s) => s + 1)}
                    >
                      {isSubmitting ? 'Submitting' : 'Next'}
                    </Button>
                  )}
                </Grid>
              </Grid>
              {/* <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 2
                }}
              >
                <Button color="primary" variant="contained">
                  Save details
                </Button>
              </Box> */}
            </Card>
          </form>
        );
      }}
    </Formik>
  );
};

export default TalentProfileDetails;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import {
//   Box,
//   Button,
//   Card,
//   CardHeader,
//   CardContent,
//   CircularProgress,
//   Grid,
//   Step,
//   StepLabel,
//   Stepper,
//   Divider
// } from '@material-ui/core';
// // eslint-disable-next-line object-curly-newline
// import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
// import { CheckboxWithLabel, TextField } from 'formik-material-ui';
// import { mixed, number, object } from 'yup';
// import PersonalDetails from './PersonalDetails';
// import JobHistory from './JobHistory';
// import EducationHistory from './EducationHistory';
// import Certification from './Certification';
// import JobExpectation from './JobExpectation';

// const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

// export default function TalentProfileDetails() {
//   const [isNewForm, setNewForm] = useState(true);
//   const [isEditForm, setIsEditForm] = useState(false);

//   const handleEdit = (edit) => {
//     setIsEditForm(edit);
//   };

//   return (
//     <Card>
//       <Grid container spacing={3}>
//         <Grid item md={6} xs={8}>
//           <CardHeader subheader="Profile" title="Talent Profile" />
//         </Grid>

//         <Grid item md={6} xs={4}>
//           <div
//             style={{
//               padding: 16,
//               display: 'flex',
//               justifyContent: 'flex-end'
//             }}
//           >
//             {isNewForm && (
//               <Button onClick={() => handleEdit(true)} variant="outlined">
//                 Edit
//               </Button>
//             )}
//           </div>
//         </Grid>
//       </Grid>
//       <Divider />
//       <CardContent>
//         <FormikStepper
//           initialValues={{
//             firstName: '',
//             lastName: '',
//             millionaire: false,
//             money: 0,
//             description: ''
//           }}
//           onSubmit={async (values) => {
//             await sleep(3000);
//             console.log('values', values);
//           }}
//         >
//           <FormikStep label="Personal">
//             <PersonalDetails />
//           </FormikStep>

//           <FormikStep label="Job History">
//             <JobHistory />
//           </FormikStep>

//           <FormikStep label="Education History">
//             <EducationHistory />
//           </FormikStep>

//           <FormikStep label="Certification">
//             <Certification />
//           </FormikStep>

//           <FormikStep label="Job Expectation">
//             <JobExpectation />
//           </FormikStep>
//         </FormikStepper>
//       </CardContent>
//     </Card>
//   );
// }

// export function FormikStep({ children }) {
//   return <>{children}</>;
// }

// export function FormikStepper({ children, ...props }) {
//   const childrenArray = React.Children.toArray(children);
//   const [step, setStep] = useState(0);
//   const currentChild = childrenArray[step];
//   const [completed, setCompleted] = useState(false);

//   function isLastStep() {
//     return step === childrenArray.length - 1;
//   }

//   return (
//     <Formik
//       {...props}
//       validationSchema={currentChild.props.validationSchema}
//       onSubmit={async (values, helpers) => {
//         if (isLastStep()) {
//           await props.onSubmit(values, helpers);
//           setCompleted(true);
//         } else {
//           setStep((s) => s + 1);

//           // the next line was not covered in the youtube video
//           //
//           // If you have multiple fields on the same step
//           // we will see they show the validation error all at the same time after the first step!
//           //
//           // If you want to keep that behaviour, then, comment the next line :)
//           // If you want the second/third/fourth/etc steps with the same behaviour
//           //    as the first step regarding validation errors, then the next line is for you! =)
//           //
//           // In the example of the video, it doesn't make any difference, because we only
//           //    have one field with validation in the second step :)
//           helpers.setTouched({});
//         }
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form autoComplete="off">
//           <Stepper alternativeLabel activeStep={step}>
//             {childrenArray.map((child, index) => (
//               <Step
//                 key={child.props.label}
//                 completed={step > index || completed}
//               >
//                 <StepLabel>{child.props.label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           {currentChild}

//           <Grid container spacing={2}>
//             {step > 0 ? (
//               <Grid item>
//                 <Button
//                   disabled={isSubmitting}
//                   variant="contained"
//                   color="primary"
//                   onClick={() => setStep((s) => s - 1)}
//                 >
//                   Back
//                 </Button>
//               </Grid>
//             ) : null}
//             <Grid item>
//               <Button
//                 startIcon={
//                   isSubmitting ? <CircularProgress size="1rem" /> : null
//                 }
//                 disabled={isSubmitting}
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//               >
//                 {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
//               </Button>
//             </Grid>
//           </Grid>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// FormikStepper.propTypes = {
//   children: PropTypes.node,
//   onSubmit: PropTypes.func
// };

// FormikStep.propTypes = {
//   children: PropTypes.node
// };
