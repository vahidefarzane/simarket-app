import { useState } from "react";
import { Stack, Box, Snackbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import Logo from "../../logo.png";
import useAxios from "../../hooks/useAxios";
import {ContainerImage} from '../../Style/styles'



export default function Login() {
  const [successfulLoginNotif, setSuccessfulLoginNotif] = useState(null);
  const [failedLoginNotif, setFailedLoginNotif] = useState(null);
  const [url, setUrl] = useState("");
  const { response:userLogin } = useAxios({
    method: "get",
    url,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClose = () => {
    setSuccessfulLoginNotif(false);
    setFailedLoginNotif(false);
  };

  const navigate = useNavigate();

  const SubmitHandeler = (data) => {
    setUrl(`/users?username=${data.username}&password=${data.password}`);
    console.log(userLogin);

    // if (userLogin.length) {
    //   localStorage.setItem("username", userLogin.username);
    //   setSuccessfulLoginNotif(true);
    //   // setTimeout(() => {
    //   //   navigate("/panel/dashboard");
    //   // }, 2000);
    // } else {
    //   setFailedLoginNotif(true);
    // }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: {
            lg: "75%",
            md: "94%",
            sm: "70%",
            xs: "100%",
          },
          justifyContent: "center",
          margin: {
            md: "2rem 0",
            xs: "1rem 0",
          },
          boxShadow: {
            sm: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          },
          padding: {
            md: "2rem 1.5rem",
            xs: "1.5rem 1rem",
          },
          borderRadius: "1rem",
        }}
      >
        <Box
          sx={{
            width: {
              md: "45%",
              xs: "100%",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: "85%" }}>
            <Box sx={{ margin: "auto", marginBottom: "2rem" }}>
              <Box
                component="img"
                sx={{
                  width: 130,
                }}
                alt="Your logo"
                src={Logo}
              ></Box>
            </Box>
            <form onSubmit={handleSubmit(SubmitHandeler)}>
              <label className="lable">نام کاربری :</label>
              <input
                {...register("username", {
                  required: "لطفا نام کاربری خود را وارد کنید .",
                })}
                type="text"
                className="input-form"
              />
              <p className="alert">{errors.username?.message}</p>

              <label className="lable">گذرواژه :</label>
              <input
                {...register("password", {
                  required: "لطفا گذرواژه خود را وارد کنید .",
                })}
                type="password"
                className="input-form"
              />
              <p className="alert">{errors.password?.message}</p>
              <input type="submit" className="submit-btn" value="ورود" />
              <div className="link-container">
                <span className="link">
                  رمز عبور خود را فراموش کردید؟
                  <Link to="/register">بازیابی رمز عبور</Link>
                </span>
                <span className="link">
                  قبلا ثبت نام نکردید؟ <Link to="/register">ثبت نام</Link>
                </span>
              </div>
              <Snackbar
                open={successfulLoginNotif}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <MuiAlert elevation={6} variant="filled" severity="success">
                  شما با موفقیت وارد شدید
                </MuiAlert>
              </Snackbar>
              <Snackbar
                open={failedLoginNotif}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <MuiAlert elevation={6} variant="filled" severity="error">
                  اطلاعات درست را وارد کنید
                </MuiAlert>
              </Snackbar>
            </form>
          </Stack>
        </Box>

        <ContainerImage>
          <Box
            sx={{ width: "85%", height: "27rem" }}
            component="img"
            alt="Your logo"
            src="./images/login.png"
          ></Box>
        </ContainerImage>
      </Box>
    </Stack>
  );
}
