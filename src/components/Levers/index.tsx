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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Agriculture from "@mui/icons-material/Landscape";
import Industry from "@mui/icons-material/Satellite";
import Sector from "@mui/icons-material/Inventory";
import Test from "@mui/icons-material/TaxiAlert";
import Transport from "@mui/icons-material/Traffic";
import Power from "@mui/icons-material/PowerTwoTone";
import Dummy from "@mui/icons-material/AccountBalance";
import {
  setShowProceedButton,
  totalLeverSelectedCount,
} from "../../redux/features/leverSlice";

interface store {
  state: {}[];
  lever: any;
  levers: any;
  sectors: any;
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
  const [value, setValue] = React.useState(2);
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
  const showButton = data.showProceed;
  // const selectedLeverCount = data.selectedLevers.length;
  const totalCount = data.totalLeverCount
  const dispatch = useDispatch();
//   const totalCount = JSON.stringify(localStorage.getItem("totalCount"));
console.log(totalCount, "totalCOunt....@@@@@@@@@@@@")

  React.useEffect(() => {
    if (Number(totalCount) >= 1) {
      dispatch(setShowProceedButton());
      // dispatch(changeStatus())
    } else if (Number(totalCount) < 1) {
      dispatch(setShowProceedButton());
      // dispatch(changeStatus())
    }
  }, [totalCount]);
  const leverDataLength = data.levers.length;
  const sectors = leverData.map((data: any) => data.sector);
  const singleSector = sectors.filter(
    (element: any, index: any, array: string | any[]) =>
      array.indexOf(element) === index
  );
  // const singleSectorElement = singleSector.map(
  //   (element: string, index: number) =>
  //     leverData.filter(
  //       (elem: any, index: number, Array: any[]) => elem.sector === element
  //     )
  // );
  // console.log("SingleSectorElement ....", singleSectorElement);
  const agri = leverData.filter(
    (el: { sector: string }) => el.sector === "Agriculture"
  );
  const indus = leverData.filter(
    (el: { sector: string }) => el.sector === "Industry"
  );
  const sect = leverData.filter(
    (el: { sector: string }) => el.sector === "Sector"
  );
  const test = leverData.filter(
    (el: { sector: string }) => el.sector === "Test"
  );
  const trans = leverData.filter(
    (el: { sector: string }) => el.sector === "Transport"
  );
  const pow = leverData.filter(
    (el: { sector: string }) => el.sector === "Power"
  );
  const dumy = leverData.filter(
    (el: { sector: string }) => el.sector === "DuMmY"
  );
  const sectorsSelectedUUID = data.sectors;
  console.log(
    sectorsSelectedUUID,
    "sectorsSelectedUUID...",
    // data,
    // "data...",
    // "status...",
    // status,
    "showButton ...",
    showButton
  );
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
            {singleSector.map((element: string, index: number) => {
              const Icon = (element: string) => {
                switch (element) {
                  case "Agriculture":
                    return <Agriculture />;
                  case "Industry":
                    return <Industry />;
                  case "Sector":
                    return <Sector />;
                  case "Test":
                    return <Test />;
                  case "Transport":
                    return <Transport />;
                  case "Power":
                    return <Power />;
                  case "Dummy":
                    return <Dummy />;

                  default:
                    break;
                }
              };

              const SectorTab = () => {
                const sectorSingleMappedElements = leverData.filter(
                  (el: { sector: string }) => el.sector === element
                );

                const sectorsSelected = useSelector(
                  (state: store) => state.sectors
                );
                // const Agri = sectorsSelected.Agriculture.length;
                // const Indus = sectorsSelected.Industry.length;
                // const Sector = sectorsSelected.Sector.length;
                const Agri = sectorsSelected.Agriculture.map((elem: string | any[])=> elem.length)
                const Indus = sectorsSelected.Industry.map((elem: string | any[])=> elem.length)
                const Sector = sectorsSelected.Sector.map((elem: string | any[])=> elem.length)
                const Test = sectorsSelected.Test.map((elem: string | any[])=> elem.length)
                const Transport = sectorsSelected.Transport.map((elem: string | any[])=> elem.length)
                const Power = sectorsSelected.Power.map((elem: string | any[])=> elem.length)
               
               
                const DuMmY = sectorsSelected.DuMmY.map((elem: string | any[])=> elem.length)
           
            


                // const Test = sectorsSelected.Test.length;
                // const Transport = sectorsSelected.Transport.length;
                // const Power = sectorsSelected.Power.length;
                // const DuMmY = sectorsSelected.DuMmY.length;
                const totalCount = Number(Agri)+ Number(Indus) + Number(Sector) + Number(Test) + Number(Transport) + Number(Power) + Number(DuMmY);
                dispatch(totalLeverSelectedCount(totalCount))
                const leverSelectedCount = useSelector((state: store) => state.lever.totalLeverCount)
                if (leverSelectedCount > 0) {
                  setShowProceedButton()
                } else if (leverSelectedCount === 0){
                  setShowProceedButton()
                }
                
                console.log(totalCount, "totalCount inside tab...", sectorsSelected, "sectorsSelected in tab index.tsx");
// React.useEffect (() => {
//   totalLeverSelectedCount(totalCount);
// },[totalCount])
                // localStorage.setItem("totalCount", JSON.stringify(totalCount));
                return (
                  <Grid container key={index + element}>
                    {Icon(element)}
                    <Typography key={index + element}>{element}</Typography>

                    <Typography variant="caption">
                      {element === "Agriculture"
                        ? Agri
                        : element === "Industry"
                        ? Indus
                        : element === "Sector"
                        ? Sector
                        : element === "Test"
                        ? Test
                        : element === "Power"
                        ? Power
                        : element === "DuMmY"
                        ? DuMmY
                        : element === "Transport"
                        ? Transport
                        : null}
                      /{sectorSingleMappedElements.length} Selected{" "}
                    </Typography>
                  </Grid>
                );
              };
              return <Tab label={<SectorTab />} {...a11yProps(index)} />;
            })}
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
            <CheckboxLever leverData={sect} />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <CheckboxLever leverData={test} />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <CheckboxLever leverData={trans} />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <CheckboxLever leverData={pow} />
          </TabPanel>
          <TabPanel value={value} index={6} dir={theme.direction}>
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
              Lever Selected : <strong> {totalCount}</strong>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              disabled={showButton}
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

// interface leverObj {
//   lever: {
//     uuid: string;
//     category?: string;
//     created_at?: Date;
//     deleted_at: Date;
//     description: string;
//     greenfield_possible: string;
//     last_updated_date: Date;
//     lever_id: string;
//     lever_id_plus_region: string;
//     location: string;
//     master_lever_uuid: string;
//     name: string;
//     owner: string;
//     review_by_date: Date;
//     sector: string;
//     segment: string;
//     source: string;
//     unit: string;
//     unspc?: string;
//     updated_at: Date;
//     version: string;
//   };
// }
