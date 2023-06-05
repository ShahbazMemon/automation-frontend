import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Typography, styled } from "@mui/material";
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


export default function Selector({
  title,
  defaultValue,
  items,
  name,
}) {

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
