import PropTypes from 'prop-types';
import { FieldArray, Formik } from 'formik';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const DropDownMenu = ({
  value,
  setValue,
  values,
  label,
  isMultiple = true,
  readOnly
}) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        multiple={isMultiple}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        // label={label}
        input={
          <OutlinedInput
            label={label}
            inputProps={{ readOnly }}
          />
        }
        MenuProps={MenuProps}
      >
        {values.map((data) => (
          <MenuItem
            key={data}
            value={data}
            style={{
              fontWeight:
                isMultiple
                  ? value.indexOf(data) === -1
                    ? 'normal'
                    : 'bold'
                  : value !== data
                    ? 'normal'
                    : 'bold'
            }}
          >
            {data}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownMenu;
