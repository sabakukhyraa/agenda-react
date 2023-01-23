import { Routes, Route } from "react-router-dom";
import { daysThisYear } from "./js/days";
import {diary} from "./helpers/diary"
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
export default function Layout() {

  const date = new Date();
  const today = date
    .toUTCString()
    .slice(5, 16)
    .toLowerCase()
    .replaceAll(" ", "-");

  daysThisYear.forEach((day) => {
    diary[day] = {
      diaryText: "",
      todoList : []
    }
  })

  return (
    <div className="flex justify-end">
      <Sidebar today={today} />
      <div className="flex w-4/5 p-6 lg:p-12">
        <Routes>
          <Route path="/" element={<Home today={today} />} />
          <Route path="/agenda/:id" element={<Agenda />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
