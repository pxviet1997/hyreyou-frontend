/* eslint-disable object-curly-newline */
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Paper,
  Tabs,
  Tab,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonalDetails from './PersonalDetails';
import JobHistory from './JobHistory';
import EducationHistory from './EducationHistory';
import Certification from './Certification';
import JobExpectation from './JobExpectation';

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
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}));

const TalentProfileDetails = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <Grid container spacing={3}>
          <Grid item md={6} xs={8}>
            <CardHeader subheader="Profile" title="Talent Profile" />
          </Grid>
        </Grid>
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <div className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
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
              </TabPanel>
              <TabPanel value={value} index={4}>
                <JobExpectation />
              </TabPanel>
            </div>
          </Grid>
        </CardContent>
        {/* <Divider />
        <Box
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
};

export default TalentProfileDetails;
