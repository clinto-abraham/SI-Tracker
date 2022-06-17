import React from "react";
import { TextField } from "@mui/material";

const Input = (props: any) => {
    console.log(props.input)
  return (
      <TextField {...props.input} onChange={props.input.onChange} value={props.input.value} required id="outlined-required" label={props.input.name} />
  );
};

export default Input;
