import React from "react";
import "./ContactUs.css";
import MyButton from "../MyButton/MyButton";

export default function ContactUs() {
  return (
    <div class="contact-us-page">
      <p>
        سلام خدمت شما کاربر گرامی،
        <br />
        برای ارتباط با مدیریت می‌توانید از پل های ارتباطی زیر استفاده نموده و یا
        از طریق فرم مقابل اقدام فرمایید:
      </p>
      <p>آدرس ایمیل: vahidefarzane@gmail.com</p>
      <p>شماره تلفن تماس: 0915000000</p>
      <h3>
        <strong>ساعات کاری:</strong>
      </h3>
      <p>شنبه تا چهارشنبه 8 صبح تا 18 عصر؛ پنج شنبه‌ها ساعت 8 صبح تا 12 ظهر</p>
    </div>
  );
}
