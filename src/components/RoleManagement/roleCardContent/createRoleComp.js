import React, { useState } from 'react';
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
import { reqCreateRole } from 'src/api';

const initialValues = {
  title: '',
  description: '',
  skillSet: ''
};

const _id = '612e3302a420646564c01214';

const AddRole = ({ setIsShowRole, setisCreatingRole }) => {
  // console.log(props);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        try {
          // const skillSet = values.skillSet;
          // console.log(Rvalues);
          const response = await reqCreateRole({ _id, ...values });
          setIsShowRole(true);
          setisCreatingRole(false);
          console.log(response);
        } catch (error) {
          console.log(error);
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
      }) => (
        <CardContent id="addrolecontent">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Role Title"
                  name="title"
                  required
                  onChange={handleChange}
                  value={values.title}
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Role Description"
                  name="description"
                  onChange={handleChange}
                  required
                  value={values.description}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Skill Set"
                  name="skillSet"
                  onChange={handleChange}
                  required
                  value={values.skillSet}
                  variant="outlined"
                />
              </Grid>

            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
              }}
            >
              <Button color="primary" variant="contained" type="submit">
                Save Role
              </Button>
            </Box>
          </form>
        </CardContent>
      )}

    </Formik>
  );
};

export default AddRole;
