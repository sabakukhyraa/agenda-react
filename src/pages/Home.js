import { NavLink } from "react-router-dom";

export default function Home({ today }) {
  return (
    <div className="w-full flex flex-col items-center text-center lg:gap-32">
      <section className="space-y-6">
        <h1>This is your Agenda!</h1>
        <p className="text-2xl">
          It's also your diary! Speak with your agenda! Write your tasks, todo's
          or whatever you want.
        </p>
        <NavLink to={`/agenda/${today}`} className="inline-block">
          <h1 className="base-btn">
            Start to write!
          </h1>
        </NavLink>
      </section>
      <div>
        <h1>Upcoming Today</h1>
        {/* buraya o günün todo componenti gelecek */}
      </div>
    </div>
  );
}

// TODO: Upcoming Today: bugünün agenda'sındaki todo list componenti Home'da gösterilir.
