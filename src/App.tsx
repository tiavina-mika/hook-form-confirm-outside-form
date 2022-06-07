import * as React from "react";
import Button from "@mui/material/Button";

import FolderDialogForm from "./components/FolderDialogForm";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form
      </Button>
      <FolderDialogForm onClose={handleClose} open={open} />
    </div>
  );
};

export default App;
