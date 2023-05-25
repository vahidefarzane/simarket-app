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

import { Link } from "react-router-dom";

export default function Modal(props) {
  return (
    <>
      <Dialog open={props.dilog} onClose={props.closeDialog}>
        <DialogContent>
          <DialogContentText>
            آیا میخواهید از حساب خود خارج شوید؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button onClick={props.logOutAccountHandler}>بله</Button>
          </Link>
          <Button onClick={props.closeDialog}>خیر</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={props.loggoutSuccessSnackbar}
        autoHideDuration={2000}
        onClose={props.closeLoggoutAlertHandeler}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          خروج از حساب با موفقیت انجام شد
        </MuiAlert>
      </Snackbar>
    </>
  );
}
