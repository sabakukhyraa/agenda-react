import { useParams } from "react-router-dom";
import { useState, useContext, useEffect, useCallback } from "react";
import TodoList from "../components/TodoList";
import { DiaryContext } from "../Layout";

export default function Agenda() {
  const { reactiveDiary, setReactiveDiary } = useContext(DiaryContext);

  const { id } = useParams();

  const [thisDiary, setThisDiary] = useState({
    diaryText: reactiveDiary[id].diaryText,
    todoList: reactiveDiary[id].todoList,
  });

  const todoListHandler = useCallback((props) => {
    setThisDiary((prev) => ({ ...prev, todoList: props }));
  }, [])

  useEffect(() => {
    localStorage.setItem("diaryData", JSON.stringify(reactiveDiary));
  }, [reactiveDiary]);

  return (
    <div className="flex flex-col w-full">
      <h1>
        {id.split("-")[0]} {id.split("-")[1].toLocaleUpperCase()}{" "}
        {id.split("-")[2]}
      </h1>
      <div className="flex flex-col gap-8 lg:py-8">
        <textarea
          className="w-full p-4 rounded-3xl bg-pink-50 lg:text-xl"
          onChange={(e) =>
            setThisDiary((prev) => ({ ...prev, diaryText: e.target.value }))
          }
          value={thisDiary.diaryText}
          rows="14"
        />
        <h1 className="pt-12">Todo List</h1>
        <TodoList localTodoList={thisDiary.todoList} callback={todoListHandler} />
      </div>
      <button
        className="self-end mt-4 base-btn lg:mt-8"
        onClick={() => setReactiveDiary((prev) => ({ ...prev, [id]: thisDiary }))}
      >
        Save
      </button>
    </div>
  );
}
