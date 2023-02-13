import { useState, useEffect } from "react";

export default function TodoList({ localTodoList, callback }) {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(localTodoList);

  const addItem = (newItem) => {
    setTodoList((prevItems) => [
      ...prevItems,
      { todo: newItem, isDone: false, id: new Date().getTime() },
    ]);
    setTodo("");
  };

  const removeItem = (id) => {
    setTodoList((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const doItem = (id) => {
    setTodoList((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    callback(todoList);
  }, [callback, todoList]);

  // UI
  const todoListMapper = todoList.map((todo, index) => (
    <li
      className="flex items-start justify-between p-2 bg-pink-500 lg:items-center rounded-xl"
      key={index}
    >
      <button onClick={() => doItem(todo.id)}>
        <p className={`text-md lg:text-3xl text-start text-red-100 ${todo.isDone && "line-through"}`}>
          {index + 1}) {todo.todo}
        </p>
      </button>
      <button
        className="px-2 py-2 text-xs lg:py-1 lg:text-lg base-btn rounded-xl"
        onClick={() => removeItem(todo.id)}
      >
        Remove
      </button>
    </li>
  ));

  return (
    <div className="flex flex-col w-full gap-4 p-4 lg:gap-12 lg:p-8 rounded-3xl bg-pink-50">
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-12">
        <input
          className="w-full px-3 py-2 text-xl rounded-2xl"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          onClick={() => addItem(todo)}
          className="w-full px-3 py-2 text-xl lg:w-auto base-btn"
        >
          Add+
        </button>
      </div>
      <div className="w-full rounded-2xl">
        <ul className="flex flex-col gap-6">{todoListMapper}</ul>
      </div>
    </div>
  );
}
