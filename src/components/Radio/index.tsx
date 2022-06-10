import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'


const RadioForm = () => {
  return (
    <FormControl> 
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      > 
        <FormControlLabel value="female" control={<Radio />} label="Work with fixed levers" />
        <FormControlLabel value="male" control={<Radio />} label="Work with customizable levers" />
        </RadioGroup>
        </FormControl>
  )
}

export default RadioForm

