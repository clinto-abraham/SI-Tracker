import React from "react";
import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import TableCheckbox from "./table";

const CheckboxLever = (props: any) => {
  const { leverData } = props;
  const agricultural = leverData.filter(
    (data: { sector: string }) => data.sector === "Agriculture"
  );
  const sectors = leverData.map((data: any) => console.log(data.sector));
  const segment = agricultural.map((data: { segment: any }) => data.segment);
  const singleSegment = segment.filter((v: any, i: any, a: string | any[]) => a.indexOf(v) === i) 
  console.log(
    "agricu",
    agricultural,
    "segmentsss",
    segment,
    "sectorssss",
    sectors,
    "single....",
    singleSegment
  );
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  // const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked([checked[0], event.target.checked]);
  // };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <Grid container>
        <Grid item xs={3}> 
        {singleSegment.map((data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, index: number) => 
      <div key={index }> 
      <FormControlLabel
        label={data}
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      </div>  ) }
       </Grid>
       <Grid item xs={9}><TableCheckbox /></Grid>
       </Grid>
    
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Select all"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}

      {/* <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Select all" />
    <FormControlLabel control={<Checkbox />} label="Other Industry-HT Heat" />
    <FormControlLabel control={<Checkbox />} label="Tractors" />
    <FormControlLabel control={<Checkbox />} label="Ethylene" />
    <FormControlLabel control={<Checkbox />} label="Other Industry" />
  </FormGroup> */}
    </div>
  );
};

export default CheckboxLever;

