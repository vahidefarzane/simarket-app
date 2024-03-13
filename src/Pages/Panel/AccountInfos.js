import React, { useState } from "react";
import { Box, Typography, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { useForm } from "react-hook-form";
import MyButton from "../../Components/CustomButton";

export default function AccountInfos() {
  const [changeInfoAccount, setChangeIngoAccount] = useState(false);
  const handleClose = () => {
    setChangeIngoAccount(false);
  };
  const submitHandeler = (data) => {
    setChangeIngoAccount(true);

    // axios
    //   .post("http://localhost:4000/users/", {
    //     username: data.userName,
    //     email: data.email,
    //     password: data.password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setRegisterSuccessSnackbar(true);
    //     setTimeout(() => {
    //       window.location.href = "http://localhost:3000/login";
    //     }, 2000);
    //   });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box>
      <form onSubmit={handleSubmit(submitHandeler)}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "49%" }}>
            <label className="lable-panel">
              نام<span className="nessesary-field-style">*</span>
            </label>
            <input
              {...register("fristName", {
                required: "لطفا نام خود را وارد کنید .",
              })}
              type="text"
              className="input-panel"
            />
            <p className="alert">{errors.fristName?.message}</p>
          </Box>
          <Box sx={{ width: "49%" }}>
            <label className="lable-panel">
              نام خانوادگی <span className="nessesary-field-style">*</span>
            </label>
            <input
              {...register("lastName", {
                required: "لطفا نام خانوادگی خود را وارد کنید .",
              })}
              type="text"
              className="input-panel"
            />
            <p className="alert">{errors.lastName?.message}</p>
          </Box>
        </Box>

        <label className="lable-panel">
          نام نمایشی
          <span className="nessesary-field-style">*</span>
          (به این صورت اسم شما در حساب کاربری و نظرات دیده خواهد شد )
        </label>
        <input
          {...register("userName", {
            required: "لطفا نام نمایشی خود را وارد کنید .",
          })}
          type="text"
          className="input-panel"
        />
        <p className="alert">{errors.userName?.message}</p>
        <label className="lable-panel">
          آدرس ایمیل
          <span className="nessesary-field-style">*</span>
        </label>
        <input
          {...register("email", {
            required: "لطفا ایمیل خود را وارد کنید .",
          })}
          type="email"
          className="input-panel"
        />
        <p className="alert">{errors.email?.message}</p>

        <Typography
          sx={{
            color: "#333",
            fontSize: "0.95rem",
            margin: "1.3rem 0",
            fontWeight: "bold",
          }}
        >
          تغییر گذرواژه
        </Typography>

        <label className="lable-panel">
          رمز عبور پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)
        </label>
        <input
          {...register("password", {
            // required: "لطفا ایمیل خود را وارد کنید .",
          })}
          type="password"
          className="input-panel"
        />
        {/* <p className="alert">{errors.password?.message}</p> */}
        <label className="lable-panel">
          رمز عبور جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)
        </label>
        <input
          {...register("password", {
            // required: "لطفا گذرواژه جدید خود را وارد کنید .",
          })}
          type="password"
          className="input-panel"
        />
        {/* <p className="alert">{errors.password?.message}</p> */}
        <label className="lable-panel">تکرار رمز عبور</label>
        <input
          {...register("password", {
            // required: "لطفا گذرواژه جدید خود را وارد کنید .",
          })}
          type="password"
          className="input-panel"
        />
        {/* <p className="alert">{errors.password?.message}</p> */}

        {/* <input type="submit" className="submit-btn" value="ثبت نام" /> */}
        <MyButton type="submit" margintop="1rem">
          ثبت تغییرات
        </MyButton>

        <Snackbar
          open={changeInfoAccount}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <MuiAlert elevation={6} variant="filled" severity="success">
            تغییرات با موفقیت انجام شد
          </MuiAlert>
        </Snackbar>
      </form>
    </Box>
  );
}
