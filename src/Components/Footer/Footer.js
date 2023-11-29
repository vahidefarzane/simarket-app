import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  Stack,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  TextField,
  IconButton,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../logo.png";
import MyButton from "../MyButton/MyButton";
import { BtnFooter,NumberBox,TextFieldStyled} from "../../Style/styles"



export default function Footer() {
  const [footerMenu, setFooterMenu] = useState([
    {
      id: 1,
      headerList: "راهنمای خرید",
      item1: "نحوه ثبت سفارش",
      item2: "رویه ارسال سفارش",
      item3: "شیوه های پرداخت",
      item4: "رویه های بازگرداندن کالا",
    },
    {
      id: 3,
      headerList: "با پارس فشن",
      item1: "حریم خصوصی",
      item2: "شرایط استفاده",
      item3: "رویه‌های بازگرداندن کالا",
      item4: "پاسخ به پرسش‌های متداول",
    },
    {
      id: 3,
      headerList: "راهنمای خرید",
      item1: "اتاق خبر پارس کالا",
      item2: "فروش در پارس کالا",
      item3: "فرصت‌های شغلی",
      item4: "تماس با پارس کالا",
    },
  ]);
  return (
    <Stack
      sx={(theme) => ({
        backgroundColor: "#212121",
        color: "#e8e8e8",
        [theme.breakpoints.up("md")]: {
          marginTop: "2rem",
          padding: "2.3rem 1.5rem 0.5rem 1.5rem",
        },
        [theme.breakpoints.down("md")]: {
          marginTop: "1.5rem",
          padding: "2rem 1rem 4rem 1rem",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "column",
          },
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              width: 150,
            }}
            alt="Your logo"
            src={Logo}
          ></Box>
          <BtnFooter
            endIcon={<KeyboardArrowUpIcon sx={{ marginRight: "0.7rem" }} />}
          >
            بازگشت به بالا
          </BtnFooter>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <Box
            sx={{
              marginLeft: "1.5rem",
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #e8e8e8",
            }}
          >
            <NumberBox component={"span"}>تلفن پشتیبانی:</NumberBox>
            <NumberBox component={"span"}> 061-535-10225</NumberBox>
          </Box>
          <Box
            sx={{
              marginLeft: "1.5rem",
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #e8e8e8",
            }}
          >
            <NumberBox component={"span"}> آدرس ایمیل:</NumberBox>
            <NumberBox component={"span"}>info@parskala.com</NumberBox>
          </Box>
          <Box>
            <NumberBox component={"span"}>
              هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.
            </NumberBox>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "2rem",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {footerMenu.map((col) => (
              <List key={col.id}>
                <ListItem
                  sx={{
                    fontWeight: "600",
                    marginBottom: "0.7rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {col.headerList}
                </ListItem>
                <Link className="footer-menu-link">
                  <ListItem>{col.item1}</ListItem>
                </Link>
                <Link className="footer-menu-link">
                  <ListItem>{col.item2}</ListItem>
                </Link>
                <Link className="footer-menu-link">
                  <ListItem>{col.item3}</ListItem>
                </Link>
                <Link className="footer-menu-link">
                  <ListItem>{col.item4}</ListItem>
                </Link>
              </List>
            ))}
            <Box sx={{ padding: "0.5rem 0" }}>
              <Typography sx={{ marginBottom: "0.7rem" }}>
                با ما همراه باشید
              </Typography>
              <Box>
                <IconButton>
                  <InstagramIcon sx={{ color: "#e3e3e6" }} />
                </IconButton>
                <IconButton>
                  <WhatsAppIcon sx={{ color: "#e3e3e6" }} />
                </IconButton>
                <IconButton>
                  <TelegramIcon sx={{ color: "#e3e3e6" }} />
                </IconButton>
                <IconButton>
                  <TwitterIcon sx={{ color: "#e3e3e6" }} />
                </IconButton>
              </Box>

              <Typography sx={{ margin: "0.5rem 0" }}>
                از جدیدترین تخفیف‌ها باخبر شوید
              </Typography>
              <Box sx={{ display: "flex" }}>
                <TextFieldStyled
                  type="email"
                  placeholder="آدرس ایمیل خود را وارد کنید"
                />
                <MyButton borderradius="0.6rem">ثبت</MyButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "2.5rem",
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Typography
              component="h4"
              sx={{
                fontSize: "0.9rem",
                fontWeight: "600",
                marginBottom: "1rem",
                lineHeight: "1.9rem",
              }}
            >
              فروشگاه اینترنتی پارس کالا، بررسی، انتخاب و خرید آنلاین
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "0.8rem",
                fontWeight: "300",
                color: " #e8e8e8",
                textAlign: "justify",
                lineHeight: "1.7rem",
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد،.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="enamad">
              <Box component="img" src="./images/enamad.png" alt="" />
            </Box>
            <Box className="enamad">
              <Box component="img" src="./images/kasbokar.png" alt="" />
            </Box>
            <Box className="enamad">
              <Box component="img" src="./images/samandehi.png" alt="" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "2rem",
            borderTop: "2px solid #e8e8e8",
            padding: "0.7rem 0 0.2rem",
            fontSize: "0.8rem",
          }}
        >
          استفاده از مطالب فروشگاه اینترنتی پارس کالا فقط برای مقاصد غیرتجاری و
          با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به پارس کالا
          می‌باشد.
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
          },
        })}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              width: 100,
            }}
            alt="Your logo"
            src={Logo}
          ></Box>
          <BtnFooter
            endIcon={<KeyboardArrowUpIcon sx={{ marginRight: "0.7rem" }} />}
          >
            بازگشت به بالا
          </BtnFooter>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1.5rem",
          }}
        >
          <Box
            sx={{
              marginBottom: "0.6rem",
            }}
          >
            <NumberBox component={"span"}>تلفن پشتیبانی:</NumberBox>
            <NumberBox component={"span"}> 061-535-10225</NumberBox>
          </Box>
          <Box
            sx={{
              marginBottom: "0.6rem",
            }}
          >
            <NumberBox component={"span"}> آدرس ایمیل:</NumberBox>
            <NumberBox component={"span"}>info@parskala.com</NumberBox>
          </Box>
          <Box>
            <NumberBox component={"span"}>
              هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.
            </NumberBox>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {footerMenu.map((col) => (
              <List key={col.id}>
                <ListItem
                  sx={{
                    fontWeight: "600",
                    marginBottom: "0.7rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {col.headerList}
                </ListItem>
                <Link className="footer-menu-link">
                  <ListItem>{col.item1}</ListItem>
                </Link>
                <Link className="footer-menu-link">
                  <ListItem>{col.item2}</ListItem>
                </Link>
                <Link className="footer-menu-link">
                  <ListItem>{col.item3}</ListItem>
                </Link>
                <Link className="footer-menu-link">
                  <ListItem>{col.item4}</ListItem>
                </Link>
              </List>
            ))}
          </Box>
          <Box sx={{ padding: "0.5rem 0", marginTop: "2rem" }}>
            <Typography sx={{ marginBottom: "0.7rem" }}>
              با ما همراه باشید
            </Typography>
            <Box>
              <IconButton>
                <InstagramIcon sx={{ color: "#e3e3e6" }} />
              </IconButton>
              <IconButton>
                <WhatsAppIcon sx={{ color: "#e3e3e6" }} />
              </IconButton>
              <IconButton>
                <TelegramIcon sx={{ color: "#e3e3e6" }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: "#e3e3e6" }} />
              </IconButton>
            </Box>

            <Typography sx={{ margin: "0.8rem 0", fontSize: "0.9rem" }}>
              از جدیدترین تخفیف‌ها باخبر شوید
            </Typography>
            <Box sx={{ display: "flex" }}>
              <TextFieldStyled
                type="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <MyButton borderradius="0.6rem">ثبت</MyButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2.5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              component="h4"
              sx={{
                fontSize: "0.9rem",
                fontWeight: "600",
                marginBottom: "1rem",
                lineHeight: "1.9rem",
              }}
            >
              فروشگاه اینترنتی پارس کالا، بررسی، انتخاب و خرید آنلاین
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "0.8rem",
                fontWeight: "300",
                color: " #e8e8e8",
                textAlign: "justify",
                lineHeight: "1.7rem",
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد،.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Box className="enamad-responsive">
              <Box component="img" src="./images/enamad.png" alt="" />
            </Box>
            <Box className="enamad-responsive">
              <Box component="img" src="./images/kasbokar.png" alt="" />
            </Box>
            <Box className="enamad-responsive">
              <Box component="img" src="./images/samandehi.png" alt="" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "2rem",
            borderTop: "2px solid #e8e8e8",
            padding: "0.7rem 0 0.2rem",
            fontSize: "0.8rem",
            textAlign: "justify",
            lineHeight: "1.2rem",
          }}
        >
          استفاده از مطالب فروشگاه اینترنتی پارس کالا فقط برای مقاصد غیرتجاری و
          با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به پارس کالا
          می‌باشد.
        </Box>
      </Box>
    </Stack>
  );
}
