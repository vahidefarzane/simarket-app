import { React } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

export default function Modal(props) {
  const {
    dilog,
    closeDialog,
    logOutAccountHandler,
    loggoutSuccessSnackbar,
    closeLoggoutAlertHandeler,
  } = props;

  return (
    <>
      <Dialog open={dilog} onClose={closeDialog}>
        <DialogContent>
          <DialogContentText>
            آیا میخواهید از حساب خود خارج شوید؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={logOutAccountHandler}>بله</Button>
          <Button onClick={closeDialog}>خیر</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={loggoutSuccessSnackbar}
        autoHideDuration={2000}
        onClose={closeLoggoutAlertHandeler}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          خروج از حساب با موفقیت انجام شد
        </MuiAlert>
      </Snackbar>
    </>
  );
}
