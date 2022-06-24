import React from "react";
import { Box, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import TableCheckbox from "./table";

const CheckboxLever = (props: any) => {
  const { leverData } = props;
  const [mapIndex, setMapIndex] = React.useState(-1);
  const segment = leverData.map((data: { segment: any }) => data.segment);
  const singleSegment = segment.filter(
    (element: any, index: any, array: string | any[]) =>
      array.indexOf(element) === index
  );

  const [checked, setChecked] = React.useState([false]);
  const setCheckedItem = singleSegment.reduce(function(obj : any, item: string) {
    obj[item.replace(" ", "")] = false; 
    return obj
 }, {});

 React.useEffect(() => {
  setChecked(setCheckedItem)
},[])


const arr = Object.values(checked)
arr.reduce((total, currentValue, currentIndex, arr) =>  checked[currentIndex] = currentValue)
const temp = singleSegment.map((elem: any, index: number) => {
  if (checked[elem] === true) {
    const finalSelectedTableData = leverData.filter((dataFiltered: any, index: number) => dataFiltered.segment === elem )
    console.log("finalSelectedTableData", finalSelectedTableData, leverData)
    return finalSelectedTableData;
  }
   
})

  console.log( "temp",temp,"arr", arr, Object.keys(checked), "Object.keys(checked)",checked,"checked", singleSegment, mapIndex)
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event, "event of handleSelectAll")
    // setChecked({...checked, [event.target.name]: event.target.checked});
    // setChecked needs to be worked
      //  setChecked([event.target.checked, checked[mapIndex]]);
      setChecked( singleSegment.reduce(function(obj : any, item: string) {
        obj[item.replace(" ", "")] = !false; 
        return obj
     }, {}));
       console.log("checked", checked, "mapIndex",mapIndex);
  };
  const handleIndividualSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
   setMapIndex(index)
    
    setChecked({ ...checked, [event.target.name ]: event.target.checked });

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
                      name={element}
                      checked={checked[index]}
                      onChange={(e) => handleIndividualSelect(e, index)}
                      key={index + element}
                    />
                  }
                />
            )
          )}
        </Grid>
        <Grid item xs={9}>
          <TableCheckbox data={ mapIndex===-1?  leverData : temp[mapIndex]} />
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
            // checked={checked[0] && checked[1]}
            checked={checked[mapIndex] && checked[mapIndex - 1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleSelectAll}
            // key='1'
          />
        }
      />
      {children}
    </div>
  );
};

export default CheckboxLever;






// 
// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import ReactDOM from "react-dom";
// import Checkbox from "@material-ui/core/Checkbox";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormHelperText from "@material-ui/core/FormHelperText";

// // Free Material-UI Template
// // https://react.school/material-ui/templates

// const CustomColorCheckbox = withStyles({
//   root: {
//     color: "#13c552",
//     "&$checked": {
//       color: "#13c552"
//     }
//   },
//   checked: {}
// })((props) => <Checkbox color="default" {...props} />);

// function App() {
//   // Checkbox
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };
//   // Checkbox Group
//   const [flavors, setFlavors] = React.useState({
//     chocolate: true,
//     vanilla: false,
//     strawberry: false
//   });

//   const { chocolate, vanilla, strawberry } = flavors;

//   const handleFlavorChange = (event) => {
//     setFlavors({ ...flavors, [event.target.name]: event.target.checked });
//   };

//   return (
//     <div>
//       <Typography variant="h5">Default Checkbox</Typography>
//       <Checkbox checked={checked} onChange={handleChange} />

//       <Typography variant="h5">Checkbox Primary Color</Typography>
//       <Checkbox color="primary" checked={checked} onChange={handleChange} />

//       <Typography variant="h5">Checkbox Disabled</Typography>
//       <Checkbox
//         disabled
//         color="primary"
//         checked={checked}
//         onChange={handleChange}
//       />

//       <Typography variant="h5">Checkbox Custom Color</Typography>
//       <CustomColorCheckbox checked={checked} onChange={handleChange} />

//       <Typography variant="h5">Checkbox disableRipple</Typography>
//       <Checkbox disableRipple checked={checked} onChange={handleChange} />

//       <Typography variant="h5">Checkbox small</Typography>
//       <Checkbox size="small" checked={checked} onChange={handleChange} />

//       <Typography variant="h5" gutterBottom>
//         Checkbox with label
//       </Typography>
//       <FormControlLabel
//         control={<Checkbox checked={checked} onChange={handleChange} />}
//         label="Check me"
//       />

//       <Typography variant="h5" gutterBottom>
//         Required Checkbox
//       </Typography>

//       <form>
//         <FormGroup>
//           <FormControl>
//             <FormControlLabel
//               control={
//                 <Checkbox checked={checked} onChange={handleChange} required />
//               }
//               label="I agree to the terms"
//             />
//           </FormControl>
//           <FormControl>
//             <Button type="submit">Submit</Button>
//           </FormControl>
//         </FormGroup>
//       </form>

//       <Typography variant="h5" gutterBottom>
//         Checkbox Group
//       </Typography>

//       <FormControl component="fieldset">
//         <FormLabel component="legend">Pick flavors</FormLabel>
//         <FormGroup>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={chocolate}
//                 onChange={handleFlavorChange}
//                 name="chocolate"
//               />
//             }
//             label="Chocolate"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={vanilla}
//                 onChange={handleFlavorChange}
//                 name="vanilla"
//               />
//             }
//             label="Vanilla"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={strawberry}
//                 onChange={handleFlavorChange}
//                 name="strawberry"
//               />
//             }
//             label="Strawberry"
//           />
//         </FormGroup>
//         <FormHelperText>
//           Ice cream may be harmful, consult your doctor.
//         </FormHelperText>
//       </FormControl>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.querySelector("#app"));
