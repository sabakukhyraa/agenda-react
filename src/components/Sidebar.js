import { NavLink } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import AgendaIcon from "./icons/AgendaIcon";
import CalendarIcon from "./icons/CalendarIcon";
import SettingsIcon from "./icons/SettingsIcon";

export default function Sidebar({today}) {

  return (
    <aside className="fixed top-0 left-0 flex items-center justify-center w-1/5 h-auto py-12 my-12 bg-pink-200 rounded-r-3xl">
      <nav className="text-center">
        <ul className="space-y-10 sidebar">
          <li>
            <h1 className="text-sm font-extrabold text-pink-500 lg:text-4xl lg:py-3">Your Agenda!</h1> 
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
              <span className="absolute text-base text-pink-500 -bottom-4 left-1/2">
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
