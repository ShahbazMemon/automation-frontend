import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material';
import { Controller } from 'react-hook-form';
import {useFormContext} from 'react-hook-form' 

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CustomSelect = styled(Select)({
  borderBottom: '1px solid gray',
  '&:hover': {
    borderBottom: '2px solid blue', // Optional: Change the style on hover
  },
});

export default function MultipleSelect({title, control, items, defaultValue, handleChange}) {
  // const theme = useTheme();
  const {setValue} = useFormContext()
  setValue()
  return (
    <div>
      <Controller
      {...reg}
      name={title}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Select {...field} onChange={handleChange}>
          <MenuItem value="">None</MenuItem>
          {items.map((item, i) => (
            <MenuItem key={i} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      )}
    />
      {/* <FormControl sx={{ m: 1, width: 300}}>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-label"
          value={selectedOption}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {items.map((item, i ) => (
            <MenuItem
              key={i}
              value={item}
              style={getStyles(item.title, selectedOption, theme)}
            >
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
    </div>
  );
}