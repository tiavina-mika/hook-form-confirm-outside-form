import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { FormProvider, useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "@emotion/styled";
import { DialogTitle } from "@mui/material";
import { folderSchema } from "../utils/validations";
import { FolderInput } from "../types/folder";
import TextField from "./TextField";

const getInitialValues = () => {
  return {
    name: "Folder without name"
  };
};
const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    width: 400
  }
}));

type Props = {
  open: boolean;
  onClose: () => void;
};

const FolderDialogForm = ({ open, onClose }: Props) => {
  const form = useForm<FolderInput>({
    defaultValues: getInitialValues(),
    resolver: zodResolver(folderSchema)
  });

  const {
    formState: { isSubmitSuccessful },
    reset,
    handleSubmit
  } = form;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmit = async (values) => {
    console.log("values: ", values);
    onClose();
  };

  return (
    <BootstrapDialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle>New folder</DialogTitle>
      <DialogContent>
        <FormProvider {...form}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            id="folder-dialog-form"
          >
            <TextField name="name" fullWidth required />
          </Box>
        </FormProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="folder-dialog-form" variant="contained">
          Ok
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default FolderDialogForm;
