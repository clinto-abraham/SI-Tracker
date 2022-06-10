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

interface store {
  state: {}[];
  lever: {};
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

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const data = useSelector((state: store) => state.lever);
  const leverData = data.levers
  const leverDataLength = data.levers.length;

  return (
    <div>
      <Alert severity="info" sx={{ paddingTop: "70px" }}>
        <AlertTitle>Note</AlertTitle>
        Please select all the levers you would like to add in the project. At
        least one lever needs to be selected to create the project
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
            <Tab label="Agriculture" {...a11yProps(0)} />
            <Tab label="Building" {...a11yProps(1)} />
            <Tab label="Industry" {...a11yProps(2)} />
            {/* <Tab label="Power" {...a11yProps(3)} />
            <Tab label="Transport" {...a11yProps(4)} /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <CheckboxLever leverData={leverData} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <CheckboxLever />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <CheckboxLever />
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
            <Typography> Lever Selected : <strong> 2</strong></Typography>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" disabled={false} >
              Proceed to add project info
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
