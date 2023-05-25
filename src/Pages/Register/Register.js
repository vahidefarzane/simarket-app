import { useState } from "react";
import { Stack, Box, Snackbar } from "@mui/material";
import { Link ,useNavigate} from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import Logo from "../../logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Register.css";

const ContainerImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function Register() {
  const [registerSuccessSnackbar, setRegisterSuccessSnackbar] = useState(false);
  const handleClose = () => {
    setRegisterSuccessSnackbar(false);
  };

  const navigate = useNavigate();

  const submitHandeler = (data) => {
    axios
      .post("http://localhost:4000/users/", {
        username: data.userName,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response);
        setRegisterSuccessSnackbar(true);
        setTimeout(() => {
          navigate('/login')

        }, 2000);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            sm: "60%",
            xs: "100%",
          },
          justifyContent: "center",
          margin: {
            md: "2rem 0",
            xs: "1rem 0",
          },
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
          }}
        >
          <Stack sx={{ width: "90%" }}>
            <Box sx={{ margin: "1rem auto" }}>
              <Box
                component="img"
                sx={{
                  width: 150,
                }}
                alt="Your logo"
                src={Logo}
              ></Box>
            </Box>
            <form onSubmit={handleSubmit(submitHandeler)}>
              <label className="lable">نام کاربری :</label>
              <input
                {...register("userName", {
                  required: "لطفا نام کاربری خود را وارد کنید .",
                })}
                type="text"
                className="input-form"
              />
              <p className="alert">{errors.userName?.message}</p>
              <label className="lable">ایمیل :</label>
              <input
                {...register("email", {
                  required: "لطفا ایمیل خود را وارد کنید .",
                })}
                type="email"
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
              <input type="submit" className="submit-btn" value="ثبت نام" />
              <div className="link-container">
                <span className="link">
                  قبلا ثبت نام کردید؟ <Link to="/login">ورود</Link>
                </span>
              </div>
              <Snackbar
                open={registerSuccessSnackbar}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <MuiAlert elevation={6} variant="filled" severity="success">
                  ثبت نام شما با موفقیت انجام شد
                </MuiAlert>
              </Snackbar>
            </form>
          </Stack>
        </Box>

        <ContainerImage>
          <Box
            sx={{ width: "87%", height: "29rem" }}
            component="img"
            alt="Your logo"
            src="./images/login.png"
          ></Box>
        </ContainerImage>
      </Box>
    </Stack>
  );
}
