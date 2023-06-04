import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography, styled } from "@mui/material";
import { Controller } from "react-hook-form";
import { useFormContext } from "react-hook-form";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 230,
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
  // borderLeft: "0px solid",
  borderBottom: "1px solid gray",
  "&:hover": {
    borderBottom: "2px solid blue", // Optional: Change the style on hover
  },
});

export default function MultipleSelect({
  title,
  defaultValue,
  items,
  name,
}) {
  const theme = useTheme();

  const methods = useFormContext();
  return (
    <div>
      <Typography variant="h6" pb={1} color="black">
        {title}
      </Typography>
      <Select
        variant="standard"
        style={{ width: "100%" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select-label"
        {...methods.register(name)}
        MenuProps={MenuProps}
      >
        {items.map((item, i) => (
          <MenuItem key={i} value={item.link}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
