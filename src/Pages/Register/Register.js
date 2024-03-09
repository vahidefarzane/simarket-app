import { useState ,useEffect} from "react";
import { Stack, Box, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {
  Link,
  useActionData,
  useNavigate,
  useSubmit,
  useRouteError,
} from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import { useForm } from "react-hook-form";
import "./Register.css";
import { httpService } from "../../hooks/useAxios";
import { ContainerImage } from "../../Style/styles";

export default function Register() {
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

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccessOperation) {
      setFormNotification(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    if (routeError) {
      setFormNotification(true);
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
              <Logo />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                type="submit"
                className="submit-btn"
                value={isSuccessOperation ? "در حال ثبت نام" : "ثبت نام"}
                disabled={isSuccessOperation}
              />
              <div className="link-container">
                <span className="link">
                  قبلا ثبت نام کردید؟ <Link to="/login">ورود</Link>
                </span>
              </div>
              <Snackbar
                open={formNotification}
                autoHideDuration={2000}
                onClose={handleCloseNotification}
              >
                {routeError ? (
                  <MuiAlert elevation={6} variant="filled" severity="error">
                    {routeError?.response?.data === "Network Error" &&
                      "لطفا از اتصال خود به اینترنت مطمئن شوید"}
                    {routeError?.response?.data === "Email already exists" &&
                      "حساب کاربری با این ایمیل موجود است"}
                    {routeError?.response?.data === "Password is too short" &&
                      "گذرواژه کوتاه است"}
                  </MuiAlert>
                ) : (
                  <MuiAlert elevation={6} variant="filled" severity="success">
                    {" ثبت نام شما با موفقیت انجام شد"}
                  </MuiAlert>
                )}
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

export async function registerAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/users", data);
  return response.status === 201;
}
