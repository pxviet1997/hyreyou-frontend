let params = new URL('localhost:3000/auth/changepassword?id=612c3325eabec10f165743f5&usertype=talent');
params = params.searchParams;
console.log(params);
const id = params.get('id');
console.log(id);
const userType = params.get('usertype');
console.log(userType);



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

export const getTalentProfileData = async (uid = '') => {
  try {
    const response = await API.get('/talent', {
      _id: uid || '6138a8cc35389921daef2627' // FIXME: SERVER_BUG: change this to dynamic and can't send body with GET method
    });
    const { data } = response;
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const TalentProfileDetails = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [isNewForm, setNewForm] = useState(true);

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
            <Button
              // disabled={isSubmitting}
              onClick={() => handleEdit(true)}
              variant="outlined"
            >
              Approve
            </Button>
          </div>
        </Grid>
        <Grid item md={6} xs={4}>
          <div
            style={{
              padding: 16,
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              // disabled={isSubmitting}
              onClick={() => handleEdit(true)}
              variant="outlined"
            >
              Reject
            </Button>
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
              <PersonalDetails />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <JobHistory />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <EducationHistory />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Certification />
              {/* // isEditForm={!isEditForm}
              // values={values}
              // handleChange={handleChange}
              // handleBlur={handleBlur}
              // touched={touched}
              // errors={errors}
              /> */}
            </TabPanel>
            <TabPanel value={value} index={4}>
              <JobExpectation />
              {/* // isEditForm={!isEditForm}
              // values={values}
              // handleChange={handleChange}
              // handleBlur={handleBlur}
              // touched={touched}
              // errors={errors}
              /> */}
            </TabPanel>
          </div>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default TalentProfileDetails;



<Grid container spacing={3}>
        <Grid item md={6} xs={6}>
          <CardHeader title="Talent Profile" />
        </Grid>
        <Grid
          item
          md={3}
          xs={3}
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Grid>
        <Grid
          item
          md={2}
          xs={2}
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button variant="outlined">
            Shortlist
          </Button>
        </Grid>
      </Grid>