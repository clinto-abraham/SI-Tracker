import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

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

const ModalForm = (props: any) => {
  const navigate = useNavigate();
  const { cancel, create } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseCancel = () => {
    setOpen(false)
    navigate('/lever')
  }

  const handleCloseConfirm = () => { 
    setOpen(false)
    navigate('/')
  };

  return (
    <div>
      {cancel ? (
        <Button variant={"outlined"} onClick={handleOpen}>
          Cancel
        </Button>
      ) : null}
      {create ? (
        <Button variant={"contained"} onClick={handleOpen}>
          
          Create Project
        </Button>
      ) : null}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {cancel ? "Cancel project" : null}
              {create ? "Create project" : null}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {cancel ? "All data entries will be cancelled" : null}
              {create
                ? "You are going to create new project with all data provided."
                : null}
            </Typography>
            {cancel ? (
              <Button variant={"contained"} onClick={handleCloseCancel}>
                Confirm
              </Button>
            ) : null}
            {create ? (
              <Button variant={"contained"} onClick={handleCloseConfirm}>
                Confirm
              </Button>
            ) : null}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalForm;
