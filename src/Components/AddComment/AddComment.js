import {
  Stack,
  Box,
  Typography,
  Divider,
  Rating,
  TextareaAutosize,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import CommentSlider from "../CommentSlider/CommentSlider";
import Input from "../Input/Input";
import MyButton from "../MyButton/MyButton";

export default function AddComment() {
  const [sliderInfo, setSliderInfo] = useState([
    { id: 1, title: "کیفیت ساخت" },
    { id: 2, title: "ارزش خرید به نسبت قیمت" },
    { id: 3, title: "امکانات و قابلیت ها" },
    { id: 4, title: "سهولت استفاده" },
  ]);

  const [addRate, setAddRate] = useState("");

  return (
    <Stack
      sx={{
        margin: "1rem 1rem 2rem 1rem",
        border: "1px solid #e3e3e3",
        borderRadius: "0.8rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            width: {
              lg: "30%",
              md: "35%",
              xs: "100%",
            },
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            padding: {
              lg: "1rem",
              md: "2rem",
              xs: "1rem",
            },
          }}
        >
          <Box
            component={"img"}
            src="./images/jacket.jpg"
            sx={{
              width: {
                lg: "75%",
                xs: "65%",
              },
              height: {
                md: "270px",
                xs: "290px",
              },
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: {
              md: "70%",
              xs: "100%",
            },
            margin: {
              md: "0",
              xs: "0 1rem",
            },
          }}
        >
          <Typography
            component={"h1"}
            sx={{
              fontSize: "1.3rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
            }}
          >
            تی شرت مردانه منان شهیدی مدل
          </Typography>
          <Divider />
          <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}>
            {sliderInfo.map((slider) => (
              <CommentSlider
                key={slider.id}
                title={slider.title}
                value={slider.value}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            md: "50%",
            xs: "100%",
          },
          padding: "2rem 1rem",

          borderLeft: "1px solid #e3e3e3",
          marginTop: "1.5rem",
        }}
      >
        <Input width="100%" lable="عنوان نظر شما (اجباری) *"></Input>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Input width="49%" lable="نقاط ضعف"></Input>
          <Input width="49%" lable="نقاط قوت"></Input>
        </Box>
        <Typography
          component="legend"
          sx={{ fontSize: "1rem", margin: "0.5rem 0 0.3rem 0" }}
        >
          امتیاز شما
        </Typography>
        <Rating
          value={addRate}
          onChange={(event, newValue) => {
            setAddRate(newValue);
          }}
        />
        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "#9e9e9e",
            margin: "1.5rem 0 1rem 0",
          }}
        >
          دیدگاه شما
        </Typography>

        <TextareaAutosize
          style={{
            borderRadius: "0.6rem",
            fontSize: "0.9rem",
            width: "100%",
            height: "9rem",
            borderColor: "#B2B1B1",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Input width="49%" lable="نام"></Input>
          <Input width="49%" lable="ایمیل"></Input>
        </Box>
        <Box sx={{ display: "flex", marginBottom: "1.5rem" }}>
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
                md: "0.9rem",
                xs: "0.8rem",
              },
            }}
          >
            ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
            می‌نویسم.
          </Typography>
        </Box>

        <MyButton
          widthupmd="20%"
          display="block"
          marginBottom="1.5rem"
          widthbetweenmdsm="25%"
          widthdownsm="20%"
        >
          ثبت
        </MyButton>
        <Link style={{ fontSize: "0.9rem", textDecoration: "underLine" }}>
          انصراف و بازگشت
        </Link>
      </Box>
    </Stack>
  );
}
