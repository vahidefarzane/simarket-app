import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsChevronUp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <div className="logo-jump-box">
            <img src="./logo.png" alt="" />
            <button>
              بازگشت به بالا
              <BsChevronUp className="arrow-top-icon" />
            </button>
          </div>
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
                  <AiOutlineInstagram  className="footer-menu-item-icon"/>
                  <BsWhatsapp className="footer-menu-item-icon" />
                  <FaTelegramPlane  className="footer-menu-item-icon"/>
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
            <h4>
              فروشگاه اینترنتی پارس کالا، بررسی، انتخاب و خرید آنلاین
            </h4>
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
            استفاده از مطالب فروشگاه اینترنتی پارس کالا فقط برای مقاصد غیرتجاری
            و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به پارس کالا
            می‌باشد.
          </div>
          <div>Copyright © 2006 - 2018 masirwp.com</div>
        </div>
      </div>
    </div>
  );
}
