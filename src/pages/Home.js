import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DiaryContext } from "../Layout";
import TodoList from "../components/TodoList";

export default function Home({ today }) {

  const { reactiveDiary } = useContext(DiaryContext)

  return (
    <div className="flex flex-col items-center w-full gap-12 text-center lg:gap-32">
      <section className="w-full space-y-6 lg:w-2/3">
        <h1 className="font-bold lg:text-7xl">This is your Agenda!</h1>
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
      <div className="w-full lg:w-2/3">
        <h1 className="pb-4 font-bold lg:pb-12 lg:text-7xl">Upcoming Today</h1>
        <TodoList localTodoList={reactiveDiary[today].todoList} type={"nothing"}/>
      </div>
    </div>
  );
}

// TODO: Upcoming Today: bugünün agenda'sındaki todo list componenti Home'da gösterilir.
