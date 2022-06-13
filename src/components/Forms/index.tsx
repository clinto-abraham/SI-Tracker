import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextareaAutosize,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index.d";

import ModalForm from "../Modal";
import RadioForm from "../Radio";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns/index.d";
const currencies = [
  {
    value: "Dollar",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const projectTypes = [
  {
    value: "Loss of pay",
    label: "LOP",
  },
  {
    value: "Initial",
    label: "Erection",
  },
  {
    value: "Mid stage",
    label: "Commissioning",
  },
];

const Form = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = React.useState("Dollar");
  const [project, setProject] = React.useState("Loss of pay");
  
  const [valueDate, setValueDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleChangeDate = (newValue: Date | null) => {
    setValueDate(newValue);
  };

  const handleChangeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  const handleChangeProject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProject(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 1310,
          position: "relative",
          padding: 5,
          marginLeft: 3,
          marginTop: 12,
          marginBottom: 3,
          marginRight: 3,
        }}
      >
        <Button
          onClick={() => navigate("/lever")}
          startIcon={<ArrowBackIcon />}
        >
          Back to explore levers
        </Button>
        <Typography variant="h4" gutterBottom component="div">
          Add Project Info
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 1310,
          position: "relative",
          minHeight: 50,
          padding: 5,
          margin: 3,
        }}
      >
        <form>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Typography> Basic Details</Typography>
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={3} className={"grid"}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Project Name"
                  />
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Project type"
                    value={project}
                    onChange={handleChangeProject}
                    helperText="Please select project type"
                  >
                    {projectTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} className={"grid"}>
                  <TextareaAutosize
                    className={"textarea"}
                    aria-label="minimum height"
                    minRows={7}
                    placeholder="Minimum 3 rows"
                    style={{ width: 200 }}
                  />
                </Grid>
              </Grid>
            </Grid>

            
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
           <Grid item xs={3} className={'grid'}>
           <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={valueDate}
          onChange={handleChangeDate}
          renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
        />

                <DatePicker
                  value={valueDate}
                  onChange={(newValue) => {
                    setValueDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                </Grid>
                <Grid item xs={9} className={'grid'}>
                <DatePicker
                  value={valueDate}
                  onChange={(newValue) => {
                    setValueDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              
            </Grid>
            </LocalizationProvider> */}
            
          </Grid>
          <Divider />
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Typography> People</Typography>
            </Grid>
            <Grid item xs={10}>
              <Grid container alignItems="center">
                <Grid item xs={3} className={"grid"}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Client Name"
                  />{" "}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  {" "}
                  <TextField
                    required
                    id="outlined-required"
                    label="Collaborators"
                  />
                </Grid>
                <Grid item xs={3} className={"grid"}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Engagement Director"
                  />{" "}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  {" "}
                  <TextField
                    required
                    id="outlined-required"
                    label="Project Level"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider />

          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Typography> Access</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography>Choose Access Level</Typography>
              <RadioForm />
              <Paper elevation={3}>
                <Grid container>
                  <Grid item xs={12} className={"grid"}>
                    {" "}
                    <Typography>Estimate PK FEE: Free for now</Typography>
                  </Grid>
                  <Grid item xs={3} className={"grid"}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Budget"
                      value={currency}
                      onChange={handleChangeCurrency}
                      helperText="Please select project type"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={9} className={"grid"}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Charge Code"
                    />
                  </Grid>
                </Grid>
              </Paper>
              <small>
                Note: If you are unsure about the selected levers, you can go
                back and edit the lever selection
              </small>
            </Grid>
          </Grid>

          <Divider />

          <Box
            sx={{
              bgcolor: "background.paper",
              width: 1310,
              position: "relative",
              maxHeight: 10,
              padding: 5,
              margin: 3,
            }}
          >
            <Stack spacing={7} direction="row">
              <ModalForm cancel={true} />
              <ModalForm create={true} />
            </Stack>
          </Box>
        </form>
      </Box>
    </>
  );
};

// Decorate with redux-form
// const MyForm = reduxForm({
//     form: 'myForm'
//   })(Form)

// export default MyForm;
export default Form;
