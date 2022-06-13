import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckboxLever from "./CheckboxLever";
import { Alert, AlertTitle, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface leverObj {
  lever: {
    uuid: string;
    category?: string;
    created_at?: Date;
    deleted_at: Date;
    description: string;
    greenfield_possible: string;
    last_updated_date: Date;
    lever_id: string;
    lever_id_plus_region: string;
    location: string;
    master_lever_uuid: string;
    name: string;
    owner: string;
    review_by_date: Date;
    sector: string;
    segment: string;
    source: string;
    unit: string;
    unspc?: string;
    updated_at: Date;
    version: string;
  };
}
interface store {
  state: {}[];
  lever: {}[leverObj];
  levers: any;
}
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function LeverTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleClickProceed = () => {
    navigate("/form");
  };
  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const data = useSelector((state: store) => state.lever);
  const leverData = data.levers;
  const leverDataLength = data.levers.length;

  const sectors = leverData.map((data: any) => data.sector);
  const singleSector = sectors.filter(
    (element: any, index: any, array: string | any[]) =>
      array.indexOf(element) === index
  );
  const singleSectorElement = singleSector.map(
    (element: string, index: number) =>
      leverData.filter(
        (elem: any, index: number, Array: any[]) => elem.sector === element
      )
  );
  console.log("SingleSectorElement",singleSectorElement);
  const agri = leverData.filter((el: { sector: string; })=> el.sector === 'Agriculture')
  const indus = leverData.filter((el: { sector: string; })=> el.sector === 'Industry')
  const sect = leverData.filter((el: { sector: string; })=> el.sector === 'Sector')
  const test = leverData.filter((el: { sector: string; })=> el.sector === 'Test')
  const trans = leverData.filter((el: { sector: string; })=> el.sector === 'Transport')
  const pow = leverData.filter((el: { sector: string; })=> el.sector === 'Power')
  const dumy = leverData.filter((el: { sector: string; })=> el.sector === 'DuMmY')
  
  return (
    <div>
      <Alert severity="info" sx={{ paddingTop: "70px" }}>
        <AlertTitle>Note</AlertTitle>
        Please select all the levers you would like to add in the project. At
        least one lever needs to be selected to create the project.{" "}
        <strong>
          At this time, new levers cannot be added once project is created!
        </strong>
      </Alert>

      <Box
        sx={{
          bgcolor: "background.paper",
          width: 1310,
          position: "relative",
          padding: 5,
          margin: 3,
        }}
      >
        <Button onClick={() => navigate("/")} startIcon={<ArrowBackIcon />}>
          Home
        </Button>
        <Typography variant={"h5"}>
          Explore Levers #{leverDataLength}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 1310,
          position: "relative",
          minHeight: 300,
          padding: 5,
          margin: 3,
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            {singleSector.map((element: string, index: number) => (
              <Tab
                label={element}
                {...a11yProps(index)}
                key={index + element}
              />
            ))}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <CheckboxLever leverData={agri} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <CheckboxLever leverData={indus} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
          <CheckboxLever leverData={indus} />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
          <CheckboxLever leverData={sect} />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
          <CheckboxLever leverData={test} />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
          <CheckboxLever leverData={trans} />
          </TabPanel>
          <TabPanel value={value} index={6} dir={theme.direction}>
          <CheckboxLever leverData={pow} />
          </TabPanel>
          <TabPanel value={value} index={7} dir={theme.direction}>
          <CheckboxLever leverData={dumy} />
          </TabPanel>
        </SwipeableViews>
      </Box>

      <Box
        sx={{
          bgcolor: "background.paper",
          width: 1310,
          position: "relative",
          padding: 5,
          margin: 3,
        }}
      >
        <Grid container>
          <Grid item xs={9}>
            <Typography>
              {" "}
              Lever Selected : <strong> 2</strong>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              disabled={false}
              onClick={handleClickProceed}
              endIcon={<ArrowForwardIcon />}
            >
              Proceed to add project info
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
