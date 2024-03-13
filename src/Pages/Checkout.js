import { React, useContext } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
  Typography,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import Input from "../Components/Input";
import SelectBox from "../Components/SelectBox";
import MyButton from "../Components/CustomButton";
import { CartContext } from "../Contexts/CartContext";

export default function Checkout({ handleNext, handleBack }) {
  const { total } = useContext(CartContext);

  return (
    <>
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
              <SelectBox name="نام استان : "></SelectBox>
              <SelectBox name="نام شهر :"></SelectBox>
            </Box>
            <Input width="100%" lable="کد پستی:" />
            <Input width="100%" lable="تلفن :" />
            <Input width="100%" lable="آدرس ایمیل :" />
            <Input width="100%" lable="کد ملی (اختیاری)" />
            <Box sx={{ display: "flex" }}>
              <Checkbox
                sx={{
                  p: 0,
                  ml: 1,
                  "&.Mui-checked": {
                    color: "#fb4208",
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: {
                    md: "1rem",
                    xs: "0.9rem",
                  },
                }}
              >
                آیا میخواهید حساب جدید ایجاد کنید؟
              </Typography>
            </Box>
            <Box sx={{ margin: "1.5rem 0" }}>
              <Typography
                component="lable"
                sx={{
                  display: "block",
                  marginBottom: "0.6rem",
                  fontSize: {
                    md: "0.9rem",
                    xs: "0.8rem",
                  },
                  color: "#909090",
                }}
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
            <Box sx={{ display: "flex" }}>
              <Checkbox
                sx={{
                  p: 0,
                  ml: 1,
                  "&.Mui-checked": {
                    color: "#fb4208",
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: {
                    md: "1rem",
                    xs: "0.9rem",
                  },
                }}
              >
                درخواست ارسال فاکتور(اختیاری)
              </Typography>
            </Box>
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
              <Typography className="card-info">{total}</Typography>
            </Box>
            <Box className="card-info-container">
              <Typography className="card-info">
                مالیات بر ارزش افزوده برآورد برای ایران
              </Typography>
              <Typography className="card-info">0 تومان</Typography>
            </Box>
            <Box className="card-info-container">
              <Typography className="card-info">تخفیف کالا ها</Typography>
              <Typography className="card-info">0</Typography>
            </Box>

            <Box className="card-info-container">
              <Typography className="card-info-main">مجموع</Typography>
              <Typography className="card-info-main">{total}</Typography>
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
            <RadioGroup
              sx={{ width: "100%" }}
              defaultValue="انتقال مستقیم بانکی"
            >
              <FormControlLabel
                sx={{
                  border: "1px solid #E3E3E3",
                  m: 0,
                  borderRadius: "0.6rem",
                  marginBottom: "0.8rem",
                }}
                value="انتقال مستقیم بانکی"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#fb4208",
                      },
                    }}
                  />
                }
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
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#fb4208",
                      },
                    }}
                  />
                }
                label="پرداخت هنگام دریافت"
              />
            </RadioGroup>
            <Box
              sx={{ display: "flex", width: "100%", marginBottom: "1.5rem" }}
            >
              <Checkbox
                sx={{
                  p: 0,
                  ml: 1,
                  "&.Mui-checked": {
                    color: "#fb4208",
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: {
                    md: "1rem",
                    xs: "0.9rem",
                  },
                }}
              >
                قوانین و مقررات را مطالعه کردم و میپذیرم
              </Typography>
            </Box>

            <MyButton
              widthupmd="100%"
              widthdownsm="100%"
              padding="0.7rem"
              borderradius="0.6rem"
              onClick={handleNext}
            >
              اقدام به پرداخت
            </MyButton>
          </Box>
        </Box>
      </Box>
      <MyButton onClick={handleBack} widthupmd="15%" margintop="2rem">
        بازگشت به مرحله قبل
      </MyButton>
    </>
  );
}
