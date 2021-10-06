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
  Box, Card, CardContent, CardHeader, Divider, Grid, Tab, Tabs, Typography,
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
      <Grid container spacing={3}>
        <Grid item md={6} xs={8}>
          <CardHeader title="Business Profile" />
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
              <Tab label="Detail" />
              <Tab label="Information" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <BusinessDetails data={data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* <JobHistory data={data} /> */}
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

// import { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Divider,
//   Grid,
//   TextField
// } from '@material-ui/core';
// import { Formik } from 'formik';

// import { validationSchema } from 'src/utils/index';

// const gender = [
//   {
//     value: 'male',
//     label: 'Male'
//   },
//   {
//     value: 'female',
//     label: 'Female'
//   }
// ];

// const defaultSize = {
//   md: 6,
//   xs: 12
// };

// const businessProfileForm = [
//   {
//     name: 'businessName',
//     value: '',
//     type: 'text',
//     label: 'Business Name',
//     size: defaultSize
//   },
//   {
//     name: 'businessABN',
//     type: 'text',
//     label: 'ABN',
//     size: defaultSize
//   },
//   {
//     name: 'email',
//     type: 'email',
//     label: 'Email',
//     size: defaultSize
//   },
//   {
//     name: 'contactNumber',
//     type: 'number',
//     label: 'Contact Number',
//     size: defaultSize
//   },
//   {
//     name: 'country',
//     type: 'text',
//     label: 'Country',
//     size: defaultSize
//   },
//   {
//     name: 'city',
//     type: 'text',
//     label: 'City',
//     size: defaultSize
//   },
//   {
//     name: 'state',
//     type: 'text',
//     label: 'State',
//     size: { ...defaultSize, md: 4 }
//   },
//   {
//     name: 'streetName',
//     type: 'text',
//     label: 'Street Name',
//     size: { ...defaultSize, md: 4 }
//   },
//   {
//     name: 'postalCode',
//     type: 'number',
//     label: 'Postal Code',
//     size: { ...defaultSize, md: 4 }
//   },
//   {
//     name: 'business_description',
//     type: 'text',
//     label: 'Business Description',
//     multiline: true,
//     rows: 3,
//     size: { ...defaultSize, md: 12 }
//   },
//   {
//     name: 'culturalInformation',
//     type: 'text',
//     label: 'Culture Information',
//     multiline: true,
//     rows: 3,
//     size: { ...defaultSize, md: 12 }
//   },
//   {
//     name: 'gender',
//     type: 'dropdown',
//     label: 'Gender',
//     options: gender,
//     select: true,
//     SelectProps: { native: true },
//     size: defaultSize
//   },
//   {
//     name: 'type',
//     type: 'text',
//     label: 'Type',
//     size: defaultSize
//   }
// ];

// const initialValues = {
//   businessName: '',
//   businessABN: '',
//   contactNumber: '',
//   email: '',
//   streetName: '',
//   city: '',
//   state: '',
//   country: '',
//   postalCode: '',
//   business_description: '',
//   culturalInformation: '',
//   type: ''
// };

// const BusinessProfileDetails = (props) => {
//   const [businessForm, setBusinessForm] = useState(null);
//   const [isNewForm, setNewForm] = useState(false);
//   const [isEditForm, setIsEditForm] = useState(false);

//   const handleEdit = (edit) => {
//     setIsEditForm(edit);
//   };

//   // const getBusinessProfile = async () => {
//   //   try {
//   //     const response = await API.get('/business');
//   //     const { data } = response;

//   //     if (!data.length) {
//   //       setNewForm(true);
//   //       setIsEditForm(true);
//   //       return;
//   //     }

//   //     setNewForm(false);
//   //     const {
//   //       businessName,
//   //       businessABN,
//   //       contactNumber,
//   //       email,
//   //       culturalInformation,
//   //       userType,
//   //       address: { streetName, city, state, country, postalCode } = {},
//   //       ...rest
//   //     } = data[0];

//   //     setBusinessForm({
//   //       businessName,
//   //       businessABN,
//   //       contactNumber,
//   //       email,
//   //       streetName: streetName || '',
//   //       city: city || '',
//   //       state: state || '',
//   //       country: country || '',
//   //       postalCode: postalCode || '',
//   //       business_description: '',
//   //       culturalInformation: '',
//   //       type: userType
//   //     });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   getBusinessProfile();
//   // }, []);

//   // const handleCreateForm = async (data) => {
//   //   try {
//   //     await API.post('/business/createBusiness', data);
//   //     alert('Profile created successfully');
//   //     setIsEditForm(false);
//   //   } catch (error) {
//   //     alert(error.message || 'something went wrong in creating profile');
//   //     console.log(error);
//   //   }
//   // };

//   // const handleUpdateForm = async (data) => {
//   //   try {
//   //     await API.post('/business/updateBusiness', data);
//   //     alert('Profile updated successfully');
//   //     setIsEditForm(false);
//   //   } catch (error) {
//   //     alert(error.message || 'something went wrong in updating profile');
//   //     console.log(error);
//   //   }
//   // };

//   return (
//     <Formik
//       initialValues={businessForm || initialValues}
//       validationSchema={validationSchema.businessProfileFormSchema}
//       enableReinitialize
//     // onSubmit={async (values) => {
//     //   // if (!isEditForm) return;

//     //   // if (isNewForm) {
//     //   //   await handleCreateForm(values);
//     //   // } else {
//     //   //   await handleUpdateForm(values);
//     //   // }
//     // }}
//     >
//       {({
//         errors,
//         handleBlur,
//         handleChange,
//         handleSubmit,
//         isSubmitting,
//         touched,
//         values
//       }) => {
//         console.log();
//         return (
//           <form
//             autoComplete="off"
//             onSubmit={handleSubmit}
//             noValidate
//             {...props}
//           >
//             <Card>
//               <Grid container spacing={3}>
//                 <Grid item md={6} xs={8}>
//                   <CardHeader subheader="Profile" title="Business Register" />
//                 </Grid>
//                 <Grid item md={6} xs={4}>
//                   <div
//                     style={{
//                       padding: 16,
//                       display: 'flex',
//                       justifyContent: 'flex-end'
//                     }}
//                   >
//                     {!isNewForm && (
//                       <Button
//                         disabled={isSubmitting}
//                         onClick={() => handleEdit(true)}
//                         variant="outlined"
//                       >
//                         Edit
//                       </Button>
//                     )}
//                   </div>
//                 </Grid>
//               </Grid>
//               <Divider />
//               <CardContent>
//                 <Grid container spacing={3}>
//                   {businessProfileForm.map((field) => {
//                     const { name, type, label } = field;
//                     if (field.select) {
//                       return (
//                         <Grid key={name} item md={6} xs={12}>
//                           <TextField
//                             fullWidth
//                             label={label}
//                             name={name}
//                             onBlur={handleBlur}
//                             onChange={handleChange}
//                             required
//                             select
//                             SelectProps={{ native: true }}
//                             value={values[name]}
//                             variant="outlined"
//                             disabled={!isEditForm}
//                           >
//                             {field.options.map((option) => (
//                               <option key={option.value} value={option.value}>
//                                 {option.label}
//                               </option>
//                             ))}
//                           </TextField>
//                         </Grid>
//                       );
//                     }

//                     return (
//                       <Grid key={name} {...field.size} item>
//                         <TextField
//                           fullWidth
//                           id={name}
//                           type={type}
//                           label={label}
//                           name={name}
//                           value={values[name]}
//                           onBlur={handleBlur}
//                           onChange={handleChange}
//                           helperText={touched[name] && errors[name]}
//                           error={Boolean(touched[name] && errors[name])}
//                           variant="outlined"
//                           multiline={Boolean(field.multiline)}
//                           rows={field.rows || 1}
//                           disabled={!isEditForm}
//                         />
//                       </Grid>
//                     );
//                   })}
//                 </Grid>
//               </CardContent>

//               <Divider />
//               <Box
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'flex-end',
//                   p: 2
//                 }}
//               >
//                 <Button
//                   disabled={!isEditForm || isSubmitting}
//                   type="submit"
//                   color="primary"
//                   variant="contained"
//                 >
//                   {isNewForm ? 'Create' : 'Update'}
//                 </Button>
//               </Box>
//             </Card>
//           </form>
//         );
//       }}
//     </Formik>
//   );
// };

// export default BusinessProfileDetails;
