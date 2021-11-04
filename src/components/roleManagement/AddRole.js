import React from 'react';
import {
  Box,
  Button,
  CardContent,
  Grid,
  TextField
} from '@material-ui/core';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createRole } from 'src/redux/actions/businessAction';

const initialValues = {
  title: '',
  description: '',
  skillSet: ''
};

const AddRole = ({ setisCreatingRole }) => {
  const { user } = useSelector((state) => state.shared);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        try {
          dispatch(createRole({ _id: user._id, ...values }));
          setisCreatingRole(false);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({
        handleChange,
        handleSubmit,
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
