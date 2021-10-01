/* eslint-disable no-alert */
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
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { getTalent } from 'src/redux/actions/businessAction';
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
    ...values,
    skills: values.skills.split(','),
    culturalPreferences: values.culturalPreferences.split(',')
  };
};

const TalentProfileDetails = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [isNewForm, setNewForm] = useState(true);
  const { state } = useLocation();
  const dispatch = useDispatch();

  const handleEdit = (edit) => {
    if (edit) {
      setValue(0);
    }
  };

  // const isLastStep = () => value === 4; // change this dynamic

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item md={6} xs={8}>
          <CardHeader title="Talent Profile" />
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
                // disabled={isSubmitting}
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
              onChange={handleTabChange}
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
              <PersonalDetails roleId={state} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <JobHistory />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <EducationHistory />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Certification />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <JobExpectation />
            </TabPanel>
          </div>
        </Grid>
      </CardContent>
      <Divider />
      {/* <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      > */}
      {/* <Grid item>
          {Boolean(Object.keys(errors).length) && (
            <p style={{ color: 'red' }}>
              * Please fill the requried field
            </p>
          )}
        </Grid> */}
      {/* {value > 0 ? (
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
      </Grid> */}
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
    //       </Form>
    //     );
    //   }}
    // </Formik>
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
