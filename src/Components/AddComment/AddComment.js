import { Stack, Box, Typography, Divider } from "@mui/material";
import { React, useState } from "react";
import CommentSlider from "../CommentSlider/CommentSlider";

export default function AddComment() {
  const [sliderInfo, setSliderInfo] = useState([
    { id: 1, title: "کیفیت ساخت" },
    { id: 2, title: "ارزش خرید به نسبت قیمت" },
    { id: 3, title: "امکانات و قابلیت ها" },
    { id: 4, title: "سهولت استفاده" },
  ]);

  return (
    <Stack sx={{ padding: "2rem 1rem" }}>
      <Box sx={{ display: "flex" ,flexDirection:{
        md:'row',
        xs:'column'
      }}}>
        <Box
          sx={{
            width: {
              lg:'30%',
              md:'35%',
              xs:'100%',
            },
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            padding:{
              lg:'1rem',
              md:'2rem',
              xs:'1rem'
            }
          }}
        >
          <Box
            component={"img"}
            src="./images/jacket.jpg"
            sx={{ width: {
              lg:'75%',
              xs:'65%'

            } ,height:{
              md:'270px',
              xs:'290px'
            }}}
          ></Box>
        </Box>
        <Box
          sx={{
            width: {
              md:'70%',
              xs:'100%',
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
    </Stack>
  );
}
