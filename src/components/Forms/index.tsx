import React from "react";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
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

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DatePicker from "react-datepicker";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
    value: "erection",
    label: "Erection",
  },
  {
    value: "Commissioning",
    label: "Commissioning",
  },
];

const Form = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = React.useState("Dollar");
  const [project, setProject] = React.useState("Loss of pay");

  const [openSnack, setOpenSnack] = React.useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const {
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
  } = useAppSelector((state: any) => state.project);
  const dispatch = useAppDispatch();

  const updateStore = (data: any) => {
    dispatch(registerProjectName(data.projectName));
    dispatch(registerProjectType(data.projectType));
    dispatch(registerTextarea(data.textarea));
    dispatch(registerDateFrom(new Date(data.dateFrom)));
    dispatch(registerDateTo(data.dateTo));
    dispatch(registerClientName(data.clientName));
    dispatch(registerCollaborator(data.collaborator));
    dispatch(registerEngagementDirector(data.engagementDirector));
    dispatch(registerProjectLevel(data.projectLevel));
    dispatch(registerFixedLever(data.fixedLever));
    dispatch(registerCustomizedLever(data.customizedLever));
    dispatch(registerBudget(data.budget));
    dispatch(registerChargeCode(data.chargeCode));
    console.log(data);
  };

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleChangeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
    control,
  } = useForm({
    defaultValues: {
      projectName: projectName,
      projectType: projectType,
      textarea: textarea,
      dateFrom: dateFrom,
      dateTo: dateTo,
      clientName: clientName,
      collaborator: collaborator,
      projectLevel: projectLevel,
      engagementDirector: engagementDirector,
      description: description,
      fixedLever: fixedLever,
      customizedLever: customizedLever,
      budget: budget,
      chargeCode: chargeCode,
    },
  });

  const onSubmit = (data: any) => {
    localStorage.setItem("projectInfo", JSON.stringify(data));
    updateStore(data);
    handleOpen();
  };

  const errorLength = Object.keys(errors).length;
  const [disabledByDefaultValue, setDisabledByDefaultValue] =
    React.useState(false);

  const hookValue = getValues();
  if (hookValue.projectName === undefined || null) {
    setDisabledByDefaultValue(!disabledByDefaultValue);
  }
  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      handleClickSnack();
    }
  }, [
    hookValue.chargeCode,
    hookValue.projectName,
    hookValue.projectType,
    hookValue.clientName,
    hookValue.collaborator,
    hookValue.textarea,
    hookValue.dateFrom,
    hookValue.dateTo,
    errors,
  ]);

  console.log(errors, errorLength, isValid, hookValue.dateFrom);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseCancel = () => {
    setOpen(false);
    navigate("/lever");
  };

  const handleCloseConfirm = () => {
    setOpen(false);
    navigate("/project-data");
    handleSubmit(onSubmit);
  };

  const uuidSelected = useAppSelector((state: any) => state.sectors);
  const agriculture = uuidSelected.Agriculture;
  const industry = uuidSelected.Industry;
  const sector = uuidSelected.Sector;
  const test = uuidSelected.Test;
  const transport = uuidSelected.Transport;
  const power = uuidSelected.Power;
  const dummy = uuidSelected.DuMmY;
  const totalCount =
    agriculture.length +
    industry.length +
    sector.length +
    test.length +
    transport.length +
    power.length +
    dummy.length;

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
                    {...register("projectName", {
                      required: true,
                      minLength: 3,
                      maxLength: 150,
                    })}
                    id="outlined-required"
                    label="Project Name"
                    // name="projectName"
                  />
                  <span>
                    {errors.projectName?.type === "required" &&
                      "Project name is required"}{" "}
                  </span>
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("projectType", {
                      required: true,
                    })}
                    id="outlined-select-currency"
                    select
                    label="Project type"
                    value={project}
                    helperText="Please select project type"
                  >
                    {projectTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.projectType &&
                    errors.projectType.type === "required" && (
                      <span>This is required</span>
                    )}
                  {errors.projectType &&
                    errors.projectType.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 100 chars only.
                      </span>
                    )}
                  {isDirty && <p>This field is dirty</p>}
                </Grid>
                <Grid item xs={12} className={"grid"}>
                  <TextareaAutosize
                    {...register("textarea", {
                      required: true,
                      minLength: 10,
                      maxLength: 100,
                    })}
                    className={"textarea"}
                    aria-label="maximum height"
                    minRows={7}
                    // name={"textarea"}
                    placeholder="Give brief in max 100 chars and min 10 chars"
                    style={{ width: 440 }}
                  />
                  {errors.textarea && errors.textarea.type === "required" && (
                    <span>This is required</span>
                  )}
                  {errors.textarea && errors.textarea.type === "maxLength" && (
                    <span>
                      Max length exceeded. Kindly enter 100 chars only.
                    </span>
                  )}
                  {errors.textarea && errors.textarea.type === "minLength" && (
                    <span>Min length 10 chars required.</span>
                  )}
                  {isDirty && <p>This field is dirty</p>}
                </Grid>

                <Grid item xs={3} className={"grid"}>
                  <label>Start date</label>
                  <DatePicker
                    {...register("dateFrom", {
                      required: true,
                    })}
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    filterDate={(date: Date) =>
                      // date.getDate()! <= new Date().getDate() &&
                      date.getDay() !== 0 &&
                      date.getDay() !== 6 &&
                      date.getFullYear()! <= new Date().getFullYear() &&
                      date.getMonth()! <= new Date().getMonth()
                    }
                    isClearable
                    maxDate={new Date()}
                    ariaLabelledBy="Pick start date"
                    showYearDropdown
                    closeOnScroll={true}
                    className={"date"}
                  />
                  <span>
                    {errors.dateFrom?.type === "required" &&
                      "Start date is required"}{" "}
                  </span>
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <label>End date</label>
                  <DatePicker
                    {...register("dateTo", {
                      required: true,
                    })}
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    filterDate={(date: Date) =>
                      // date.getDate() !>= new Date().getDate() &&
                      date.getDay() !== 0 &&
                      date.getDay() !== 6 &&
                      date.getFullYear()! >= new Date().getFullYear() &&
                      date.getMonth()! >= new Date().getMonth()
                    }
                    isClearable
                    minDate={new Date()}
                    ariaLabelledBy="Pick end date"
                    showYearDropdown
                    closeOnScroll={true}
                    className={"date"}
                  />
                  <span>
                    {errors.dateTo?.type === "required" &&
                      "End date is required"}{" "}
                  </span>
                </Grid>
              </Grid>
            </Grid>
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
                      minLength: 3,
                      maxLength: 25,
                    })}
                    required
                    id="outlined-required"
                    label="Client Name"
                  />
                  {errors.clientName &&
                    errors.clientName.type === "required" && (
                      <span>This is required</span>
                    )}
                  {errors.clientName &&
                    errors.clientName.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 25 chars only.
                      </span>
                    )}
                  {errors.clientName &&
                    errors.clientName.type === "minLength" && (
                      <span>Min length 3 chars required.</span>
                    )}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("collaborator", {
                      required: true,
                      minLength: 3,
                      maxLength: 25,
                    })}
                    id="outlined-required-collaborators"
                    label="Collaborators"
                    name="collaborator"
                  />
                  {errors.collaborator &&
                    errors.collaborator.type === "required" && (
                      <span>This field is required</span>
                    )}
                  {errors.collaborator &&
                    errors.collaborator.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 25 chars only.
                      </span>
                    )}
                  {errors.collaborator &&
                    errors.collaborator.type === "minLength" && (
                      <span>Min length 3 chars required.</span>
                    )}
                </Grid>
                <Grid item xs={3} className={"grid"}>
                  <TextField
                    {...register("engagementDirector", {
                      required: true,
                      minLength: 3,
                      maxLength: 15,
                    })}
                    required
                    id="outlined-required"
                    label="Engagement Director"
                    name="engagementDirector"
                  />
                  {errors.engagementDirector &&
                    errors.engagementDirector.type === "required" && (
                      <span>This field is required</span>
                    )}
                  {errors.engagementDirector &&
                    errors.engagementDirector.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 25 chars only.
                      </span>
                    )}
                  {errors.engagementDirector &&
                    errors.engagementDirector.type === "minLength" && (
                      <span>Min length 3 chars required.</span>
                    )}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("projectLevel", {
                      required: true,
                      maxLength: 15,
                      minLength: 3,
                    })}
                    id="outlined-required"
                    label="Project Level"
                  />
                  {errors.projectLevel &&
                    errors.projectLevel.type === "required" && (
                      <span>This field is required</span>
                    )}
                  {errors.projectLevel &&
                    errors.projectLevel.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 25 chars only.
                      </span>
                    )}
                  {errors.projectLevel &&
                    errors.projectLevel.type === "minLength" && (
                      <span>Min length 3 chars required.</span>
                    )}
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
              <Typography>Access Level</Typography>

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Choose anyone
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  {...register("fixedLever")}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Work with fixed levers"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Work with customizable levers"
                  />
                </RadioGroup>
              </FormControl>

              <Paper elevation={3}>
                <Grid container>
                  <Grid item xs={12} className={"grid"}>
                    <Typography>Estimate PK FEE: Free for now</Typography>
                  </Grid>
                  <Grid item xs={3} className={"grid"}>
                    <TextField
                      {...register("budget")}
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
                      {...register("chargeCode", {
                        required: true,
                        maxLength: 15,
                      })}
                      required
                      id="outlined-required"
                      label="Charge Code"
                      type="number"
                    />
                    {errors.chargeCode &&
                      errors.chargeCode.type === "required" && (
                        <span>This field is required</span>
                      )}
                    {errors.chargeCode &&
                      errors.chargeCode.type === "maxLength" && (
                        <span>
                          Max length exceeded. Kindly enter 25 chars only.
                        </span>
                      )}
                    {errors.chargeCode &&
                      errors.chargeCode.type === "minLength" && (
                        <span>Min length 3 chars required.</span>
                      )}
                  </Grid>
                </Grid>
              </Paper>
              <small>
                Note: If you are unsure about the selected levers, you can go
                back and edit the lever selection
              </small>

              <Snackbar
                open={openSnack}
                autoHideDuration={6000}
                onClose={handleCloseSnack}
              >
                <Alert
                  onClose={handleCloseSnack}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {Object.keys(errors).map((elem, index) => (
                    <>
                      {" "}
                      {" Kindly enter the following field values"}
                      <small key={index + elem}>
                        {" "}
                        {index + 1} : {elem}
                      </small>{" "}
                    </>
                  ))}
                </Alert>
              </Snackbar>
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
              <Button variant={"outlined"} onClick={handleCloseCancel}>
                Cancel
              </Button>

              <Button
                variant={"contained"}
                // onClick={handleOpen}
                onClick={handleSubmit(onSubmit)}
                disabled={
                  errorLength > 0 || disabledByDefaultValue === true
                    ? true
                    : false
                }
                // disabled={ !isValid }
                // disabled={disabled}
              >
                Create Project
              </Button>

              <Modal
                aria-labelledby="transition-modal-cancel"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 1000,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-create"
                      variant="h6"
                      component="h2"
                    >
                      Create project
                    </Typography>

                    <>
                      <Typography variant="h3">
                        {totalCount} Sectors selected{" "}
                      </Typography>
                      <Grid container>
                        <Grid item xs={4}>
                          <Typography variant="h6">Agriculture :</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          {agriculture.map((elem: any, index: number) => (
                            <Typography key={index + elem}>
                              {elem.length === 0
                                ? "None selected in this category"
                                : elem + " ,"}
                            </Typography>
                          ))}
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="h6">Industry :</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          {industry.map((elem: any, index: number) => (
                            <Typography key={index + elem}>
                              {elem.length === 0
                                ? "None selected in this category"
                                : elem + " ,"}{" "}
                            </Typography>
                          ))}
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="h6">Sector :</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          {sector.map((elem: any, index: number) => (
                            <Typography key={index + elem}>
                              {elem.length === 0
                                ? "None selected in this category"
                                : elem + " ,"}{" "}
                            </Typography>
                          ))}
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="h6">Test :</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          {test.map((elem: any, index: number) => (
                            <Typography key={index + elem}>
                              {elem.length === 0
                                ? "None selected in this category"
                                : elem + " ,"}{" "}
                            </Typography>
                          ))}
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="h6">Transport :</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          {transport.map((elem: any, index: number) => (
                            <Typography key={index + elem}>
                              {elem.length === 0
                                ? "None selected in this category"
                                : elem + " ,"}{" "}
                            </Typography>
                          ))}
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="h6">Power :</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          {power.map((elem: any, index: number) => (
                            <Typography key={index + elem}>
                              {elem.length === 0
                                ? "None selected in this category"
                                : elem + " ,"}{" "}
                            </Typography>
                          ))}
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="h6">Dummy :</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          {dummy.map((elem: any, index: number) => (
                            <Typography key={index + elem}>
                              {elem.length === 0
                                ? "None selected in this category"
                                : elem + " ,"}{" "}
                            </Typography>
                          ))}
                        </Grid>
                      </Grid>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        These are the UUID selected for creating new project.
                        You are going to create new project with all data
                        provided.
                      </Typography>
                    </>

                    <Button
                      variant={"contained"}
                      onClick={handleCloseConfirm}
                      type="submit"
                    >
                      Confirm
                    </Button>
                  </Box>
                </Fade>
              </Modal>
            </Stack>
          </Box>

          {/* <Button type="submit" onClick={handleSubmit(onSubmit)}>
            done
          </Button> */}
        </form>
      </Box>
    </>
  );
};

export default Form;








// formik management
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

// all imports optional
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker/index.d";
// import ModalForm from "./Modal";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import { useDispatch, useSelector } from "react-redux";
// import { create } from "yup/lib/Reference";

// const handleChangeProject = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setProject(event.target.value);
// };

// console.log(formData, "formData ....");

// const projectName = formData.projectName;
// const projectType = formData.projectType;
// const textarea = formData.textarea;
// const dateFrom = formData.dateFrom;
// const dateTo = formData.dateTo;
// const clientName = formData.clientName;
// const collaborator = formData.collaborator;
// const projectLevel = formData.Level;
// const engagementDirector = formData.engagementDirector;
// const description = formData.description;
// const fixedLever = formData.fixedLever;
// const customizedLever = formData.customizedLever;
// const budget = formData.budget;
// const chargeCode = formData.chargeCode;

// interface store {
//   sectors: any;
// }
// import { UpdateStore } from "./updateStore";

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

//  <LocalizationProvider dateAdapter={AdapterDateFns}>
//            <Grid item xs={3} className={'grid'}>
//            <DesktopDatePicker
//           label="Date desktop"
//           inputFormat="MM/dd/yyyy"
//           value={valueDate}
//           onChange={handleChangeDate}
//           renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
//         />

//                 <DatePicker
//                   value={valueDate}
//                   onChange={(newValue) => {
//                     setValueDate(newValue);
//                   }}
//                   renderInput={(params) => <TextField {...params} />}
//                 />
//                 </Grid>
//                 <Grid item xs={9} className={'grid'}>
//                 <DatePicker
//                   value={valueDate}
//                   onChange={(newValue) => {
//                     setValueDate(newValue);
//                   }}
//                   renderInput={(params) => <TextField {...params} />}
//                 />

//             </Grid>
//             </LocalizationProvider>
