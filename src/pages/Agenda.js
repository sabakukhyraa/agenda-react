import { useParams } from "react-router-dom";
import { useState } from "react";
import TodoList from "../components/TodoList";
import Notes from "../components/Notes";

export default function Agenda({ diaryOfThatDay }) {
  const { id } = useParams();
  const [thisDiary, setThisDiary] = useState({
    diaryText: "",
    todoList: [],
  });

  const submitter = () => {
    diaryOfThatDay = thisDiary;
  };

  return (
    <div className="w-full">
      <h1>
        {id.split("-")[0]} {id.split("-")[1].toLocaleUpperCase()}{" "}
        {id.split("-")[2]}
      </h1>
      <div className="flex flex-col lg:py-8 gap-8">
        <textarea
          className="w-full rounded-3xl bg-pink-50 outline-none p-4 lg:text-xl"
          onChange={(e) =>
            setThisDiary({ ...thisDiary, diaryText: e.target.value })
          }
          value={thisDiary.diaryText}
          rows="10"
        />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <Notes />
          <TodoList />
        </div>
        <button onClick={submitter()}></button>
      </div>
    </div>
  );
}
