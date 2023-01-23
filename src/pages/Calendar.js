import { useState } from "react";
import { daysThisYear } from "../js/days";
import { Link } from "react-router-dom";

export default function Calendar() {
  const [agendaCalendar, setAgendaCalendar] = useState(
    daysThisYear.map((day, index) => {
      return (
        <li key={index}>
          <Link
            className="px-4 py-2 rounded-xl shadow-xl bg-pink-300 text-xl block grow-animation"
            to={`agenda/${day.toLowerCase().replaceAll(" ", "-")}`}
          >
            {day}
          </Link>
        </li>
      );
    })
  );

  const searchEngine = (key) => {
    setAgendaCalendar(
      daysThisYear
        .filter((day) =>
          day.toLowerCase().slice(0, 7).includes(key.toLowerCase())
        )
        .map((day, index) => {
          return (
            <li key={index}>
              <Link
                className="px-4 py-2 rounded-xl shadow-xl bg-pink-300 text-xl block"
                to={`agenda/${day.toLowerCase().replaceAll(" ", "-")}`}
              >
                {day}
              </Link>
            </li>
          );
        })
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <h1>Calendar</h1>
        <div>
          <label className="text-xl" for="search">
            Search:{" "}
          </label>
          <input
            className="outline-none w-full lg:w-auto bg-red-200 shadow-lg rounded-xl text-2xl font-semibold px-2 py-1"
            type="text"
            id="search"
            onChange={(e) => searchEngine(e.target.value)}
          />
        </div>
      </div>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agendaCalendar}
      </ul>
    </div>
  );
}
