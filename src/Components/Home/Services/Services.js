import React, { useState } from "react";
import "./Services.css";
import { FiLifeBuoy } from "react-icons/fi";
import { RxCalendar } from "react-icons/rx";
import { SlWallet } from "react-icons/sl";
import { TfiTruck } from "react-icons/tfi";

export default function Services() {
  const [services,setServices] =useState( [
    { id: 1, icon: <FiLifeBuoy />, text: "پشتیبانی 24/7" },
    { id: 2, icon: <RxCalendar />, text: "6 روز گارانتی کالا" },
    { id: 3, icon: <SlWallet />, text: "تضمین قیمت کالا" },
    { id: 4, icon: <TfiTruck />, text: "ارسال به سراسر کشور" },
  ])
  return (
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-box">
          <div className="service-icon">{service.icon}</div>
          <div className="service-text">
            <span className="service-company">پارس کالا</span>
            <span className="service-title">{service.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
