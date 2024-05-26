import React, { useState } from "react";
import { AddCircle, DateRange } from "@mui/icons-material";
import { Fab, Modal, Tooltip,Box,Typography, ButtonGroup, Button } from "@mui/material";

const AddIcon = () => {
  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(!open)
  };
  return (
    <>
     
      <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: 10 }} onClick={handleClose}>
        <Fab color="primary" aria-label="add">
          <AddCircle />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={{display:'flex',alignItems:"center",justifyContent:'center'}}>
        <Box   width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
      
      
        </Box>
      </Modal>
    </>
  );
};

export default AddIcon;
