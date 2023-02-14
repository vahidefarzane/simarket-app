import { React, useEffect, useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Stepper,
  Step,
  Button,
  StepButton,
  Divider,
  IconButton,
  InputBase,
  FormControlLabel,
  Checkbox,
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import MyButton from "../MyButton/MyButton";
import SelectBox from "../SelectBox/SelectBox";
import Input from "../Input/Input";
import Logo from "../../logo.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import BeenhereIcon from "@mui/icons-material/Beenhere";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

import "./cart.css";

const steps = ["سبد خرید", "صورتحساب", "فاکتور"];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: " #ff6a00",
      borderTopWidth: 2,
      borderRadius: 1,
    },
  },

  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#eaeaf0",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

export default function Cart() {
  const [activeStep, setActiveStep] = useState(0);
  const [productNumberCart, setProductNumberCart] = useState(1);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const plusProductHandler = () => {
    setProductNumberCart((prevNumber) => prevNumber + 1);
  };
  const minusProductHandler = () => {
    setProductNumberCart((prevNumber) => prevNumber - 1);
  };
  const changeNumber = (e) => {
    setProductNumberCart(Number(e.target.value));
  };
  useEffect(() => {
    console.log(productNumberCart);
  }, [productNumberCart]);

  const [cities, setCities] = useState({
    Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
    Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
    US: ["Los Angles", "San Diego", "Chicago"],
  });

  return (
    <Stack
      sx={{
        marginTop: "8rem",
        padding: {
          md: "2.5rem",
          xs: "1rem",
        },
      }}
    >
      <Stack
        sx={{
          border: "1px solid #E3E3E3",
          borderRadius: "0.8rem",
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "1rem",
        }}
      >
        <Box component="img" src={Logo} sx={{ width: "15%", margin: "1rem" }} />
        <Box
          sx={{
            width: {
              lg: "60%",
              md: "70%",
              sm: "80%",
              xs: "100%",
            },
          }}
        >
          <Stepper
            nonLinear
            activeStep={activeStep}
            connector={<QontoConnector />}
          >
            {steps.map((label, index) => (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#FF6A00",
                    fontWeight: "bold",
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "#FF6A00",
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "#fff",
                  },
                  "& .MuiSvgIcon-root": {
                    marginLeft: "0.6rem",
                  },
                }}
              >
                <StepButton onClick={handleStep(index)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Stack>
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
          {activeStep === 0 && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: {
                    sm: "row",
                    xs: "column",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "right",

                    width: {
                      md: "72%",
                      xs: "100%",
                    },
                    flexDirection: {
                      sm: "row",
                      xs: "column",
                    },
                  }}
                >
                  <Box
                    src="./images/jacket.jpg"
                    component="img"
                    sx={{
                      margin: {
                        md: "0 0 0 2rem",
                        sm: "0 0 0 1rem",
                        xs: "0 auto",
                      },
                      width: {
                        md: "29%",
                        sm: "28%",
                        xs: "60%",
                      },
                    }}
                  ></Box>
                  <Box sx={{ marginTop: "1.5rem" }}>
                    <Typography
                      sx={{ marginBottom: "1.5rem", fontWeight: "bold" }}
                    >
                      جاکت مردانه
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <BeenhereIcon
                        sx={{ fontSize: "0.8rem", marginLeft: "0.4rem" }}
                      />
                      <Typography
                        component="span"
                        sx={{
                          fontSize: {
                            lg: "0.8rem",
                            xs: "0.7rem",
                          },
                        }}
                      >
                        گارانتی 18 ماهه فروشگاه اینترنتی پارس کالا
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          border: "1px solid  #ff6a00",
                          borderRadius: "0.6rem",
                          padding: "0.2rem ",
                        }}
                      >
                        <IconButton
                          onClick={plusProductHandler}
                          disableRipple={true}
                          sx={{ color: " #ff6a00" }}
                        >
                          <AddIcon />
                        </IconButton>
                        <InputBase
                          onChange={(e) => changeNumber(e)}
                          type="tel"
                          sx={{
                            width: "4rem",
                            color: " #ff6a00",
                            textAlign: "center",
                          }}
                          value={1}
                        >
                          {productNumberCart}
                        </InputBase>
                        <IconButton
                          onClick={minusProductHandler}
                          disableRipple={true}
                          sx={{ color: " #ff6a00" }}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Box>
                      <Button
                        variant="outlined"
                        disableRipple={true}
                        sx={{
                          color: "#535353",
                          borderColor: "#B2B1B1",
                          marginRight: "1rem",
                          borderRadius: "0.6rem",
                          "&:hover": {
                            backgroundColor: "transparent",
                            borderColor: "#B2B1B1",
                          },
                        }}
                        endIcon={
                          <DeleteForeverOutlinedIcon
                            sx={{ marginRight: "0.4rem" }}
                          />
                        }
                      >
                        حذف
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Stack
                  sx={{
                    marginTop: {
                      sm: "0",
                      xs: "1.5rem",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: {
                        md: "0.9rem",
                        sm: "0.7rem",
                        xs: "1rem",
                      },
                    }}
                  >
                    {`تخفیف ${"56,000"} تومان`}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "1.1rem",
                        sm: "0.9rem",
                        xs: "1.1rem",
                      },
                      fontWeight: "bold",
                    }}
                  >
                    {` ${"565,000"} تومان`}
                  </Typography>
                </Stack>
              </Box>
              <Divider sx={{ margin: "1.5rem 0" }} />
              <Box sx={{ display: "flex" }}>
                <InputBase
                  sx={{
                    border: "1px solid #B2B1B1",
                    borderRadius: "0.6rem",
                    padding: "0.4rem 0.7rem",
                    fontSize: "0.9rem",
                    width: {
                      md: "15%",
                      xs: "30%",
                    },
                    marginLeft: "1rem",
                  }}
                  placeholder="کد تخفیف :"
                ></InputBase>
                <MyButton borderradius="0.6rem" fontsizedownmd="0.8rem">
                  اعمال کد تخفیف
                </MyButton>
              </Box>
            </>
          )}
          {activeStep === 1 && (
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
          )}
          {activeStep === 2 && <Box>3</Box>}
        </Box>
        {activeStep === 0 && (
          <Box
            sx={{
              width: {
                md: "28.5%",
                xs: "100%",
              },
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
            <Divider sx={{ marginBottom: "1rem" }} />
            <Box className="card-info-container">
              <Typography className="card-info-main">مجموع</Typography>
              <Typography className="card-info-main">40,000 تومان</Typography>
            </Box>
            <MyButton
              widthupmd="100%"
              widthdownsm="100%"
              padding="0.7rem"
              borderradius="0.6rem"
            >
              اقدام به پرداخت
            </MyButton>
          </Box>
        )}
        {activeStep === 1 && (
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
        )}
      </Box>
    </Stack>
  );
}
