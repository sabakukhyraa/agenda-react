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
  }, []);

  useEffect(() => {
    localStorage.setItem("diaryData", JSON.stringify(reactiveDiary));
  }, [reactiveDiary]);

  const saveChanges = !(
    thisDiary.diaryText === reactiveDiary[id].diaryText &&
    thisDiary.todoList === reactiveDiary[id].todoList
  );

  return (
    <div className="relative flex flex-col w-full">
      <div
        onClick={() =>
          setReactiveDiary((prev) => ({ ...prev, [id]: thisDiary }))
        }
        className={`fixed top-4 lg:right-4 animation bg-pink-200 flex flex-col gap-4 p-6 rounded-3xl w-full lg:w-1/5 backdrop-blur bg-opacity-60 ${
          saveChanges ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button className="px-4 pt-2 pb-1 text-2xl base-btn">
          Save Changes
        </button>
      </div>

      <h1>
        {id.split("-")[0]} {id.split("-")[1].toLocaleUpperCase()}{" "}
        {id.split("-")[2]}
      </h1>
      <div className="flex flex-col gap-20 lg:py-8">
        <textarea
          className="w-full p-4 rounded-3xl bg-pink-50 lg:text-xl"
          onChange={(e) =>
            setThisDiary((prev) => ({ ...prev, diaryText: e.target.value }))
          }
          value={thisDiary.diaryText}
          rows="14"
        />
        <TodoList
          localTodoList={thisDiary.todoList}
          callback={todoListHandler}
          type={"interactive"}
        />
      </div>
      <button
        className="self-end mt-4 base-btn lg:mt-8"
        onClick={() =>
          setReactiveDiary((prev) => ({ ...prev, [id]: thisDiary }))
        }
      >
        Save
      </button>
    </div>
  );
}
