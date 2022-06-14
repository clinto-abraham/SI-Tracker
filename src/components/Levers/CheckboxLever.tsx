import React from "react";
import { Box, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import TableCheckbox from "./table";

const CheckboxLever = (props: any) => {
  const { leverData } = props;
  const segment = leverData.map((data: { segment: any }) => data.segment);
  const singleSegment = segment.filter(
    (element: any, index: any, array: string | any[]) =>
      array.indexOf(element) === index
  );

  // console.log(singleSegment)
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setChecked([event.target.checked, checked[index]]);
  };

  // const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked([checked[0], event.target.checked]);
  // };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <Grid container>
        <Grid item xs={3}>
          
          {singleSegment.map(
            ( element: string, index: number) => (
                <FormControlLabel
                  label={element}
                  control={
                    <Checkbox
                      checked={checked[index]}
                      onChange={(e) => handleChange2(e, index)}
                      key={index + element}
                    />
                  }
                />
            )
          )}
        </Grid>
        <Grid item xs={9}>
          <TableCheckbox data={leverData} />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      <Typography>{singleSegment.length} Segment</Typography>
      <FormControlLabel
        label="Select all"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
            // key='1'
          />
        }
      />
      {children}
    </div>
  );
};

export default CheckboxLever;
