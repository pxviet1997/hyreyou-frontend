import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const MyTextField = ({
  label,
  placeholder,
  type = 'text',
  disabled,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      fullWidth
      label={label}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

MyTextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

export default MyTextField;
