/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { Formik } from 'formik';

import API from 'src/services';
import { validationSchema } from 'src/utils/index';

const gender = [
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'female',
    label: 'Female'
  }
];

const defaultSize = {
  md: 6,
  xs: 12
};

const businessProfileForm = [
  {
    name: 'businessName',
    value: '',
    type: 'text',
    label: 'Business Name',
    size: defaultSize
  },
  {
    name: 'businessABN',
    value: '',
    type: 'text',
    label: 'ABN',
    size: defaultSize
  },
  {
    name: 'email',
    value: '',
    type: 'email',
    label: 'Email',
    size: defaultSize
  },
  {
    name: 'contactNumber',
    value: '',
    type: 'number',
    label: 'Contact Number',
    size: defaultSize
  },
  {
    name: 'business_address',
    value: '',
    type: 'text',
    label: 'Address',
    size: { ...defaultSize, md: 12 }
  },
  {
    name: 'business_description',
    value: '',
    type: 'text',
    label: 'Business Description',
    multiline: true,
    rows: 3,
    size: { ...defaultSize, md: 12 }
  },
  {
    name: 'culturalInformation',
    value: '',
    type: 'text',
    label: 'Culture Information',
    multiline: true,
    rows: 3,
    size: { ...defaultSize, md: 12 }
  },
  {
    name: 'gender',
    value: '',
    type: 'dropdown',
    label: 'Gender',
    options: gender,
    select: true,
    SelectProps: { native: true },
    size: defaultSize
  },
  {
    name: 'type',
    value: '',
    type: 'text',
    label: 'Type',
    size: defaultSize
  },
  {
    name: 'password',
    value: '',
    type: 'password',
    label: 'Password',
    size: defaultSize
  }
];

const initialValues = {
  businessName: '',
  businessABN: '',
  contactNumber: '',
  email: '',
  business_address: '',
  business_description: '',
  culturalInformation: '',
  type: '',
  password: ''
};

const BusinessProfileDetails = (props) => {
  const [state, setState] = useState(null);
  const [isEditForm, setIsEditForm] = useState(false);

  const handleEdit = (edit) => {
    setIsEditForm(edit);
  };

  const getBusinessProfile = async () => {
    try {
      const response = await API.get('/business');
      console.log({ response });
      const {
        businessName,
        businessABN,
        contactNumber,
        email,
        culturalInformation,
        userType,
        ...data
      } = response.data[0];
      setState({
        businessName,
        businessABN,
        contactNumber,
        email,
        business_address: '',
        business_description: '',
        culturalInformation: '',
        type: userType,
        password: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBusinessProfile();
  }, []);

  const handleUpdateForm = async (data) => {
    try {
      const response = await API.post('/business', data);
      console.log({ response });
    } catch (error) {
      alert('something went wrong in updating profile');
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={state || initialValues}
      validationSchema={validationSchema.businessProfileFormSchema}
      enableReinitialize
      onSubmit={async (values) => {
        await handleUpdateForm(values);
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
        console.log();
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
                  <CardHeader subheader="Profile" title="Business Register" />
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
                      disabled={isSubmitting}
                      onClick={() => handleEdit(true)}
                      variant="outlined"
                    >
                      Edit
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  {businessProfileForm.map((field) => {
                    const { name, type, label } = field;
                    if (field.select) {
                      return (
                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label={label}
                            name={name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values[name]}
                            variant="outlined"
                            disabled={!isEditForm}
                          >
                            {field.options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </TextField>
                        </Grid>
                      );
                    }

                    return (
                      <Grid key={name} {...field.size} item>
                        <TextField
                          fullWidth
                          id={name}
                          type={type}
                          label={label}
                          name={name}
                          value={values[name]}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          helperText={touched[name] && errors[name]}
                          error={Boolean(touched[name] && errors[name])}
                          variant="outlined"
                          multiline={Boolean(field.multiline)}
                          rows={field.rows || 1}
                          disabled={!isEditForm}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </CardContent>

              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 2
                }}
              >
                <Button
                  disabled={!isEditForm || isSubmitting}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Save details
                </Button>
              </Box>
            </Card>
          </form>
        );
      }}
    </Formik>
  );
};

export default BusinessProfileDetails;
