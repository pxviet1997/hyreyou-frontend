// /* eslint-disable object-curly-newline */
// /* eslint-disable operator-linebreak */
// /* eslint-disable react/jsx-curly-newline */
// /* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import {
  Box, Card, CardContent, Container, CardHeader, Divider, Grid, Tab, Tabs, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import BusinessDetails from './BusinessDetails';
import BusinessInformation from './BusinessInfomation';

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

const BusinessProfileDetails = ({ data }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => setValue(newValue);

  return (
    <Card>
      <Box px={4}>
        <CardHeader title="Business Profile" />
      </Box>
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
                  <Tab label="Detail" />
                  <Tab label="Information" />
                </Tabs>
              </Container>
            </Box>
            <TabPanel value={value} index={0}>
              <BusinessDetails data={data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <BusinessInformation data={data} />
            </TabPanel>
          </div>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default BusinessProfileDetails;
