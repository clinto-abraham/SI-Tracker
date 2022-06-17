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
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Controller, useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

import ModalForm from "../Modal";
import RadioForm from "../Radio";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker/index.d";
import DatePicker from "react-datepicker";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns/index.d";
import { Field, reduxForm } from "redux-form";
import Input from "./Input";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  registerForm,
  registerProjectName,
  registerProjectType,
  registerTextarea,
  registerDateFrom,
  registerDateTo,
  registerClientName,
  registerCollaborator,
  registerEngagementDirector,
  registerProjectLevel,
  registerFixedLever,
  registerCustomizedLever,
  registerBudget,
  registerChargeCode,
} from "../../redux/features/formSlice";

// interface errorProps {
//   projectName: string;
//       projectType: string;
//       textarea: string;
//       dateFrom: string;
//       dateTo: string;
//       clientName: string;
//       collaborator: string;
//       engagementDirector: string;
//       projectLevel: string;
//       fixedLever: string;
//       customizedLever: string;
//       budget: string;
//       chargeCode: string;
// }
// const validate  = (values:  errorProps  ) => {
//   let errors = {
//     projectName: '',
//       projectType: '',
//       textarea: '',
//       dateFrom: '',
//       dateTo: '',
//       clientName: '',
//       collaborator: '',
//       engagementDirector: '',
//       projectLevel: '',
//       fixedLever: '',
//       customizedLever: '',
//       budget: '',
//       chargeCode: '',
//   };

//   if (!values.projectName) {
//     errors.projectName = 'Required';
//   } else if (values.projectName.length > 15) {
//     errors.projectName = 'Must be 15 characters or less';
//   }

//   if (!values.textarea) {
//     errors.textarea = 'Required';
//   } else if (values.textarea.length < 150) {
//     errors.textarea = 'Must be 150 characters or more';
//   }

//   if (!values.clientName) {
//     errors.clientName = 'Required';
//   } else if (values.clientName.length > 20) {
//     errors.clientName = 'Must be 20 characters or less';
//   }

//   // if (!values.email) {
//   //   errors.email = 'Required';
//   // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   //   errors.email = 'Invalid email address';
//   // }

//   return errors;
// };

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
  const formData = useSelector((state: any) => state.project);
  const dispatch = useDispatch();
  const updateStore = (data: any) => {
    dispatch(registerProjectName(data.projectName));
    dispatch(registerProjectType(data.projectType));
    dispatch(registerTextarea(data.textarea));
    dispatch(registerDateFrom(data.dateFrom));
    dispatch(registerDateTo(data.dateTo));
    dispatch(registerClientName(data.ClientName));
    dispatch(registerCollaborator(data.collaborator));
    dispatch(registerEngagementDirector(data.engagementDirector));
    dispatch(registerProjectLevel(data.projectLevel));
    dispatch(registerFixedLever(data.fixedLever));
    dispatch(registerCustomizedLever(data.customizedLever));
    dispatch(registerBudget(data.budget));
    dispatch(registerChargeCode(data.chargeCode));
  };
  const [valueDate, setValueDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChangeDate = (newValue: Date | null) => {
    setValueDate(newValue);
  };

  const [startDate, setStartDate] = React.useState(new Date());

  const handleChangeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  // const handleChangeProject = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setProject(event.target.value);
  // };



  // console.log(formData, "formData ....");


  
  const projectName = formData.projectName;
  const projectType = formData.projectType;
  const textarea = formData.textarea;
  const dateFrom = formData.dateFrom;
  const dateTo = formData.dateTo;
  const clientName = formData.clientName;
  const collaborator = formData.collaborator;
  const projectLevel = formData.Level;
  const engagementDirector = formData.engagementDirector;
  const description = formData.description;
  const fixedLever = formData.fixedLever;
  const customizedLever = formData.customizedLever;
  const budget = formData.budget;
  const chargeCode = formData.chargeCode;

  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      projectName,
      projectType,
      textarea,
      dateFrom,
      dateTo,
      clientName,
      collaborator,
      projectLevel,
      engagementDirector,
      description,
      fixedLever,
      customizedLever,
      budget,
      chargeCode,
    },
  });

  const onSubmit = (data: any) => {
    console.log("I am hit", data);
    updateStore(data);
    console.log("redux data..",formData)
  };

  //   const formik = useFormik({
  //   initialValues: {
  //     projectName: '',
  //     projectType: '',
  //     textarea: '',
  //     dateFrom: '',
  //     dateTo: '',
  //     clientName: '',
  //     collaborator: '',
  //     engagementDirector: '',
  //     projectLevel: '',
  //     fixedLever: '',
  //     customizedLever: '',
  //     budget: '',
  //     chargeCode: '',
  //   },
  //   validate,
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

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
        <form >
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
                    {...register("projectName", {
                      required: true,
                      minLength: 3,
                      maxLength: 15,
                    })}
                    required
                    id="outlined-required"
                    label="Project Name"
                    name="projectName"
                    // value={formik.values.projectName}
                    // onChange={(e)=> { formik.handleChange(e);  updateStore("projectName", "projectName : tesla" );} }
                  />
                   {errors.projectName?.type === 'required' && "Project name is required"}
                  {/* <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={(e)=> { formik.handleChange(e); console.log(e); updateStore("projectName", e );} }
                  
                    // value={formData.projectName}
                    // onChange={(value: any, event: any) => {
                    //   handleChange(event);
                    //   updateStore("projectName", value);
                    // }}
                  /> */}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("projectType", {
                      required: true,
                      maxLength: 15,
                    })}
                    id="outlined-select-currency"
                    select
                    name="projectType"
                    label="Project type"
                    // value={project}
                    // onChange={handleChangeProject}
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
                    {...register("textarea", {
                      required: true,
                      minLength: 50,
                      maxLength: 150,
                    })}
                    className={"textarea"}
                    aria-label="maximum height"
                    minRows={7}
                    name={"textarea"}
                    // value={formData.textarea}
                    placeholder="Minimum 3 rows"
                    style={{ width: 200 }}
                  />
                </Grid>

                <Grid item xs={3} className={"grid"}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    filterDate={(date: Date) =>
                      date.getDate() >= date.getDate() - 1 &&
                      date.getDate() !== 0
                    }
                    isClearable
                    ariaLabelledBy="Pick date"
                    showYearDropdown
                    className={"date"}
                  />
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    filterDate={(date: Date) =>
                      date.getDate() >= date.getDate() + 1 &&
                      date.getDate() !== 0
                    }
                    isClearable
                    ariaLabelledBy="Pick date"
                    showYearDropdown
                    className={"date"}
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
                  {/* <Controller
        control={control}
        // id="outlined-required"
                    label="Client Name"
                    name='clientName'
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} />}
      /> */}

                  <TextField
                    {...register("clientName", {
                      required: true,
                      maxLength: 15,
                    })}
                    required
                    id="outlined-required"
                    label="Client Name"
                    name="clientName"
                  />
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("collaborator", {
                      required: true,
                      maxLength: 15,
                    })}
                    id="outlined-required-collaborators"
                    label="Collaborators"
                    name="collaborator"
                  />
                </Grid>
                <Grid item xs={3} className={"grid"}>
                  <TextField
                    {...register("engagementDirector", {
                      required: true,
                      maxLength: 15,
                    })}
                    required
                    id="outlined-required"
                    label="Engagement Director"
                    name="engagementDirector"
                  />
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("projectLevel", {
                      required: true,
                      maxLength: 15,
                    })}
                    required
                    id="outlined-required"
                    label="Project Level"
                    name="projectLevel"
                  />
                  {/* <Grid item xs={3} className={"grid"}>
                    <Field name="projectLevel" component={Input} />
                  </Grid>
                  <Grid item xs={9} className={"grid"}>
                    <Field name="description" component={Input} />
                  </Grid> */}
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
                    <Typography>Estimate PK FEE: Free for now</Typography>
                  </Grid>
                  <Grid item xs={3} className={"grid"}>
                    <TextField
                      {...register("budget", { required: true, maxLength: 15 })}
                      id="outlined-select-currency"
                      select
                      label="Budget"
                      name="budget"
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
                      {...register("chargeCode", {
                        required: true,
                        maxLength: 15,
                      })}
                      required
                      id="outlined-required"
                      label="Charge Code"
                      name="chargeCode"
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
          <Button type="submit" onClick={handleSubmit(onSubmit)}>done</Button>
        </form>
      </Box>
    </>
  );
};

export default Form;

// Connect your component with redux
// connect(
//   ({
//     projectName,
//     projectType,
//     textarea,
//     dateFrom,
//     dateTo,
//     clientName,
//     collaborator,
//     projectLevel,
//     engagementDirector,
//     description,
//     fixedLever,
//     customizedLever,
//     budget,
//     chargeCode,
//   }) => ({
//     projectName,
//     projectType,
//     textarea,
//     dateFrom,
//     dateTo,
//     clientName,
//     collaborator,
//     projectLevel,
//     engagementDirector,
//     description,
//     fixedLever,
//     customizedLever,
//     budget,
//     chargeCode,
//   }),
//   registerClientName
// )(Form);

// Decorate with redux-form
// const MyForm = reduxForm({
//   form: "createLeverForm",
// })(Form);

// export default MyForm;

// import React from 'react';
// import { useFormik } from 'formik';

// // A custom validation function. This must return an object
// // which keys are symmetrical to our values/initialValues
// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// const SignupForm = () => {
//   // Pass the useFormik() hook initial form values, a validate function that will be called when
//   // form values change or fields are blurred, and a submit function that will
//   // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validate,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       {formik.errors.email ? <div>{formik.errors.email}</div> : null}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
