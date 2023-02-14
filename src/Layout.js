import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { daysThisYear } from "./js/days";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";

export const DiaryContext = createContext({
  diary: {},
});

export default function Layout() {
  const date = new Date();
  const today = date
    .toUTCString()
    .slice(5, 16)
    .toLowerCase()
    .replaceAll(" ", "-");
  const Today = date
    .toUTCString()
    .slice(5, 16)
    .replaceAll(" ", "-");

  const diary = {};

  daysThisYear.forEach((day) => {
    diary[day.toLowerCase()] = {
      diaryText: "",
      todoList: [],
    };
  });

  const [reactiveDiary, setReactiveDiary] = useState(JSON.parse(localStorage.getItem("diaryData")) || diary); //send this reactiveDiary to localStorage

  return (
    <div className="flex justify-end">
      <DiaryContext.Provider value={{ reactiveDiary, setReactiveDiary }}>
        <Sidebar today={today} />
        <div className="flex w-4/5 p-6 lg:p-12">
          <Routes>
            <Route exact path="/" element={<Home today={today} />} />
            <Route path="/calendar" element={<Calendar today={Today} />} />
            <Route path="/agenda/:id" element={<Agenda today={today} />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </DiaryContext.Provider>
    </div>
  );
}
