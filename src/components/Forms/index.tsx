import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index.d";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns/index.d";
import ModalForm from "../Modal";
import RadioForm from "../Radio";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

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
  const [currency, setCurrency] = React.useState("Dollar");
  const [project, setProject] = React.useState("Loss of pay");
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
              <TextField required id="outlined-required" label="Project Name" />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
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

            {/* <Grid item xs={2}>
              <Typography>hhh</Typography>
            </Grid>
            <Grid item xs={10}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid> */}
          </Grid>
          <Divider />
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Typography> People</Typography>
            </Grid>
            <Grid item xs={10}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Client Name"
                  />{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField
                    required
                    id="outlined-required"
                    label="Collaborators"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Engagement Director"
                  />{" "}
                </Grid>
                <Grid item xs={6}>
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
                <Typography>Estimate PK FEE: Free for now</Typography>
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

                <TextField
                  required
                  id="outlined-required"
                  label="Charge Code"
                />
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
