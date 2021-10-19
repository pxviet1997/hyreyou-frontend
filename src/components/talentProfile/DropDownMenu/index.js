import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@material-ui/core';

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
  console.log(value);
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
        input={
          <OutlinedInput
            label={label}
            inputProps={{ readOnly }}
          />
        }
        MenuProps={MenuProps}
      >
        {values && values.map((data) => (
          <MenuItem
            key={data}
            value={data}
            style={{
              fontWeight:
                isMultiple
                  ? value.indexOf(data) === -1
                    ? 'normal' : 'bold'
                  : value !== data
                    ? 'normal' : 'bold'
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
