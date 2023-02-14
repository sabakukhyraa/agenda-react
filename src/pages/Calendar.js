// import { useState } from "react";
import { monthsContainsDays } from "../js/days";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/swiper.css";

// import required modules
import { Pagination } from "swiper";

export default function Calendar({ today }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const dayMapper = (month) => {
    return month.map((day, index) => {
      return (
        <li key={index}>
          <Link
            className={`block px-4 py-2 text-xl bg-pink-300 shadow-xl rounded-xl grow-animation ${(day === today) && "!bg-pink-500 text-pink-100"}`}
            to={`/agenda/${day.toLowerCase().replaceAll(" ", "-")}`}
          >
            {day.replaceAll("-", " ")}
          </Link>
        </li>
      );
    });
  };

  const monthList = monthsContainsDays.map((month, index) => (
    <SwiperSlide key={index}>
      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dayMapper(month)}
      </ul>
    </SwiperSlide>
  ));

  let thisMonthIndex;

  monthsContainsDays.forEach((month, index) => {
    if(month.includes(today)){
      thisMonthIndex = index
    }
  });

  return (
    <div className="flex flex-col w-full gap-4">
      <h1>Calendar</h1>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        initialSlide={thisMonthIndex}
        className="mySwiper"
      >
        {monthList}
      </Swiper>
    </div>
  );
}
