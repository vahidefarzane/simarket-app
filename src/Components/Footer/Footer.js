import React from "react";
import "./Footer.css";
import { styled } from "@mui/material/styles";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsChevronUp } from "react-icons/bs";
import { Stack, Box, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Logo from "../../logo.png";
import MyButton from "../MyButton/MyButton";



const BtnFooter = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border:' 1px solid #a1a3a8',
  borderRadius: '0.6rem',
  padding: '1.5rem 1.5rem 1.5rem 1.2rem',
  color: '#a1a3a8',
  maxHeight: '3.1rem',
  [theme.breakpoints.down("md")]: {
    
  },
  [theme.breakpoints.up("md")]: {
    
  },
}));

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div>
            <div className="tell-box">
              <div className="number-box">
                <span>تلفن پشتیبانی:</span>
                <span> 061-535-10225</span>
              </div>
              <div className="email-box">
                <span> آدرس ایمیل:</span>
                <span>info@parskala.com</span>
              </div>
              <div className="suport">
                <span>هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.</span>
              </div>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-box">
              <span className="footer-box-title">راهنمای خرید</span>
              <ul className="footer-menu">
                <li className="footer-menu-item">نحوه ثبت سفارش</li>
                <li className="footer-menu-item">رویه ارسال سفارش</li>
                <li className="footer-menu-item">شیوه‌های پرداخت</li>
                <li className="footer-menu-item">رویه‌های بازگرداندن کالا</li>
              </ul>
            </div>
            <div className="footer-box">
              <span className="footer-box-title">راهنمای خرید</span>
              <div className="footer-box-container">
                <ul className="footer-menu">
                  <li className="footer-menu-item">نحوه ثبت سفارش</li>
                  <li className="footer-menu-item">رویه ارسال سفارش</li>
                  <li className="footer-menu-item">شیوه‌های پرداخت</li>
                  <li className="footer-menu-item">رویه‌های بازگرداندن کالا</li>
                </ul>
              </div>
            </div>
            <div className="footer-box">
              <span className="footer-box-title">راهنمای خرید</span>
              <div className="footer-box-container">
                <ul className="footer-menu">
                  <li className="footer-menu-item">نحوه ثبت سفارش</li>
                  <li className="footer-menu-item">رویه ارسال سفارش</li>
                  <li className="footer-menu-item">شیوه‌های پرداخت</li>
                  <li className="footer-menu-item">رویه‌های بازگرداندن کالا</li>
                </ul>
              </div>
            </div>
            <div className="footer-box">
              <span className="footer-box-title">با ما همراه باشید</span>
              <div className="footer-box-container">
                <ul className="footer-menu">
                  <li className="footer-menu-item">
                    <AiOutlineInstagram className="footer-menu-item-icon" />
                    <BsWhatsapp className="footer-menu-item-icon" />
                    <FaTelegramPlane className="footer-menu-item-icon" />
                    <FiTwitter className="footer-menu-item-icon" />
                  </li>
                  <li className="footer-menu-item">
                    از جدیدترین تخفیف‌ها باخبر شوید
                  </li>
                  <li className="footer-menu-item">
                    <form>
                      <input
                        className="footer-input"
                        type="email"
                        placeholder="آدرس ایمیل خود را وارد کنید"
                      />
                      <button className="footer-submit-btn">ثبت</button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-core">
            <div className="footer-desc">
              <h4>فروشگاه اینترنتی پارس کالا، بررسی، انتخاب و خرید آنلاین</h4>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد،.
              </p>
            </div>
            <div className="footer-enamad">
              <div className="enamad">
                <img src="./images/enamad.png" alt="" />
              </div>
              <div className="enamad">
                <img src="./images/kasbokar.png" alt="" />
              </div>
              <div className="enamad">
                <img src="./images/samandehi.png" alt="" />
              </div>
            </div>
          </div>
          <div className="footer-copy-right">
            <div>
              استفاده از مطالب فروشگاه اینترنتی پارس کالا فقط برای مقاصد
              غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به
              پارس کالا می‌باشد.
            </div>
            <div>Copyright © 2006 - 2018 masirwp.com</div>
          </div>
        </div>
        
      </div>
      <Stack
        sx={{
          bgcolor: "#212121",
          color: "#e8e8e8",
          marginTop: "2rem",
          padding: "2.3rem 1rem 0.5rem 1rem",
        }}
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
          <BtnFooter endIcon={<KeyboardArrowUpIcon sx={{marginRight:'0.7rem'}} />}>
            بازگشت به بالا
          </BtnFooter>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          
        </Box>
      </Stack>
    </>
  );
}
