/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import {
  Box, Card, CardContent, CardHeader, Container, Divider, Grid, Tab, Tabs, Typography, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Certification from './Certification';
import EducationHistory from './EducationHistory';
import JobExpectation from './JobExpectation';
import JobHistory from './JobHistory';
import PersonalDetails from './PersonalDetails';

const TabPanel = (props) => {
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
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  }
}));

const TalentProfileDetails = ({ data, header }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { userType, user, talent } = useSelector((state) => state.shared);

  const handleTabChange = (event, newValue) => setValue(newValue);

  return (
    <Card>
      {header}
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <div className={classes.root}>
            <Box px={3}>
              <Container maxWidth="lg">
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
              </Container>
            </Box>
            <TabPanel value={value} index={0}>
              <PersonalDetails data={data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <JobHistory data={data} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <EducationHistory data={data} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Certification data={data} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <JobExpectation data={data} />
            </TabPanel>
          </div>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default TalentProfileDetails;
