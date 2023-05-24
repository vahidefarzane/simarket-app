import React from "react";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Panel.css";

export default function TrackingOrder() {
  const submitHandeler = (data) => {
    axios
      .get(`http://localhost:4000/users?password=${data.orderNumber}`)
      .then((response) => {
        console.log(response.data);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box>
      <Typography
        component="h2"
        sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}
      >
        از این فرم جهت پیگیری وضعیت سفارش استفاده نمایید.
      </Typography>
      <form onSubmit={handleSubmit(submitHandeler)}>
        <label className="lable-panel">شماره سفارش</label>
        <input
          {...register("orderNumber", {
            required: "لطفا شماره سفارش خود را وارد کنید",
            message: "لطفا شماره سفارش صحیح را وارد کنید",
          })}
          type="text"
          className="input-panel"
          placeholder="شماره سفارش در ایمیل ارسال شده به شما موجود است"
        />
        <p className="alert">{errors.orderNumber?.message}</p>
        <input type="submit" className="submit-btn-panel" value="رهگیری" />
      </form>
    </Box>
  );
}
