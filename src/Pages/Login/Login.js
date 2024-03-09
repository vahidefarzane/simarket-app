import { useState } from "react";
import { Stack, Box, Snackbar } from "@mui/material";
import {
  Link,
  useNavigate,
  useSubmit,
  useRouteError,
  useActionData,
  redirect,
} from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import Logo from "../../Components/Logo/Logo";
import useAxios from "../../hooks/useAxios";
import { ContainerImage } from "../../Style/styles";
import { useEffect } from "react";
import axios from "axios";
import { httpService } from "../../hooks/useAxios";

export default function Login() {
  const [formNotification, setFormNotification] = useState(false);
  const handleCloseNotification = () => {
    setFormNotification(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = useSubmit();

  const routeError = useRouteError();
  const onSubmit = (data) => {
    submitForm(data, { method: "POST" });
  };

  const isSuccessOperation = useActionData();

  useEffect(() => {
    // if (isSuccessOperation) {
    //   setFormNotification(true);
    //   setTimeout(() => {
    //     navigate("/");
    //   }, 2000);
    // }
    if (routeError) {
      setFormNotification(true);
      console.log(routeError);
    }
  }, [isSuccessOperation, routeError]);

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
              <Logo />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="lable">ایمیل</label>
              <input
                {...register("email", {
                  required: "لطفا ایمیل خود را وارد کنید .",
                })}
                type="text"
                className="input-form"
              />
              <p className="alert">{errors.email?.message}</p>

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
                open={formNotification}
                autoHideDuration={2000}
                onClose={handleCloseNotification}
              >
                {routeError ? (
                  <MuiAlert elevation={6} variant="filled" severity="error">
                    {routeError?.message === "Network Error" &&
                      "لطفا از اتصال خود به اینترنت مطمئن شوید"}
                    {routeError?.response?.data === "Cannot find user" &&
                      "حساب کاربری با این ایمیل موجود نیست"}
                    {routeError?.response?.data === "Incorrect password" &&
                      "گذرواژه اشتباه است"}
                  </MuiAlert>
                ) : (
                  <MuiAlert elevation={6} variant="filled" severity="success">
                    {"شما با موفقیت وارد شدید"}
                  </MuiAlert>
                )}
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

export async function loginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/login", data);
  if (response.status === 200) {
    localStorage.setItem("username", "کاربر");
    localStorage.setItem("token", response?.data.accessToken);
    return redirect("/");
  }
}

