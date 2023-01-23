import { NavLink } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import AgendaIcon from "./icons/AgendaIcon";
import CalendarIcon from "./icons/CalendarIcon";
import SettingsIcon from "./icons/SettingsIcon";

export default function Sidebar({today}) {

  return (
    <aside className="fixed left-0 top-0 h-auto w-1/5 bg-red-200 rounded-r-3xl flex items-center justify-center py-12 my-12">
      <nav className="text-center">
        <ul className="space-y-10 sidebar">
          <li>
            <h1 className="font-extrabold text-pink-500 lg:text-4xl text-sm lg:py-3">Your Agenda!</h1> 
            {/* TODO: Burası max-character: 30lu bir input olacak ve localStorage'da tutulacak */}
          </li>
          <li>
            <NavLink to="/">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>

          <li className="relative">
            <NavLink to={`/agenda/${today}`}>
              <AgendaIcon />
              <span>Agenda</span>
              <span className="absolute -bottom-4 left-1/2 text-pink-500 text-base">
                (today)
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/calendar">
              <CalendarIcon />
              <span>Calendar</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings">
              <SettingsIcon />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
