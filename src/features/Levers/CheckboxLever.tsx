import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const CheckboxLever = () => {
  return (
    <div><FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Select all" />
    <FormControlLabel control={<Checkbox />} label="Other Industry-HT Heat" />
    <FormControlLabel control={<Checkbox />} label="Tractors" />
    <FormControlLabel control={<Checkbox />} label="Ethylene" />
    <FormControlLabel control={<Checkbox />} label="Other Industry" />
  </FormGroup></div>
  )
}

export default CheckboxLever



