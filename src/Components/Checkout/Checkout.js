import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
  Typography,
  Divider,
  RadioGroup,
  Radio,
} from "@mui/material";
import Input from "../Input/Input";
import SelectBox from "../SelectBox/SelectBox";
import MyButton from "../MyButton/MyButton";

export default function Checkout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        justifyContent: "space-between",
        marginTop: "1rem",
      }}
    >
      <Box
        sx={{
          width: {
            md: "70%",
            xs: "100%",
          },
          border: "1px solid #E3E3E3",
          borderRadius: "0.8rem",
          padding: {
            sm: "1.5rem",
            xs: "0.7rem",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Input width="49%" lable="نام :" />
            <Input width="49%" lable="نام خانوادگی :" />
          </Box>
          <Input
            width="100%"
            lable="خیابان"
            placholder="پلاک خانه و نام خیابان "
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <SelectBox></SelectBox>
            <SelectBox></SelectBox>
          </Box>
          <Input width="100%" lable="کد پستی:" />
          <Input width="100%" lable="تلفن" />
          <Input width="100%" lable="آدرس ایمیل" />
          <Input width="100%" lable="کد ملی (اختیاری)" />
          <FormControlLabel
            sx={{ m: 0 }}
            control={<Checkbox sx={{ p: 0, ml: 1 }} />}
            label="می خواهید یک حساب کاربری ایجاد کنید ؟"
          />
          <Box sx={{ margin: "1.5rem 0" }}>
            <Typography
              component="lable"
              sx={{ display: "block", marginBottom: "0.6rem" }}
            >
              یادداشت سفارش (اختیاری)
            </Typography>
            <TextareaAutosize
              style={{
                borderRadius: "0.6rem",
                fontSize: "0.9rem",
                width: "100%",
                height: "8rem",
                borderColor: "#B2B1B1",
              }}
              placeholder="یادداشت ها درباره سفارش شما، برای مثال نکات مهم تحویل بار"
            />
          </Box>
          <FormControlLabel
            sx={{ m: 0 }}
            control={<Checkbox sx={{ p: 0, ml: 1 }} />}
            label="درخواست ارسال فاکتور خرید (اختیاری)"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "block",
          width: {
            md: "28.5%",
            xs: "100%",
          },
        }}
      >
        <Box
          sx={{
            border: "1px solid #E3E3E3",
            borderRadius: "0.8rem",
            padding: {
              md: "2rem 1.5rem",
              xs: "1rem",
            },
            marginTop: {
              md: "0",
              xs: "1rem",
            },
          }}
        >
          <Box className="card-info-container">
            <Typography className="card-info">قیمت کالا ها</Typography>
            <Typography className="card-info">289,000 تومان</Typography>
          </Box>
          <Box className="card-info-container">
            <Typography className="card-info">
              مالیات بر ارزش افزوده برآورد برای ایران
            </Typography>
            <Typography className="card-info">0 تومان</Typography>
          </Box>
          <Box className="card-info-container">
            <Typography className="card-info">تخفیف کالا ها</Typography>
            <Typography className="card-info">40,000 تومان</Typography>
          </Box>

          <Box className="card-info-container">
            <Typography className="card-info-main">مجموع</Typography>
            <Typography className="card-info-main">40,000 تومان</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #E3E3E3",
            borderRadius: "0.8rem",
            padding: {
              md: "1rem",
              xs: "1rem",
            },
            marginTop: {
              md: "1rem",
              xs: "1rem",
            },
          }}
        >
          <RadioGroup sx={{ width: "100%" }} defaultValue="انتقال مستقیم بانکی">
            <FormControlLabel
              sx={{
                border: "1px solid #E3E3E3",
                m: 0,
                borderRadius: "0.6rem",
                marginBottom: "0.8rem",
              }}
              value="انتقال مستقیم بانکی"
              control={<Radio />}
              label="انتقال مستقیم بانکی"
            />
            <FormControlLabel
              sx={{
                border: "1px solid #E3E3E3",
                m: 0,
                borderRadius: "0.6rem",
                marginBottom: "2rem",
              }}
              value="پرداخت هنگام دریافت"
              control={<Radio />}
              label="پرداخت هنگام دریافت"
            />
          </RadioGroup>
          <FormControlLabel
            sx={{ m: 0 }}
            control={<Checkbox sx={{ p: 0, ml: 1 }} />}
            label="من قوانین و مقررات شرایط و مقررات را خواندم و آن را می پذیرم."
          />

          <MyButton
            widthupmd="100%"
            widthdownsm="100%"
            padding="0.7rem"
            borderradius="0.6rem"
          >
            اقدام به پرداخت
          </MyButton>
        </Box>
      </Box>
    </Box>
  );
}
