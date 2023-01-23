export default function TodoList({ todoList, callback }) {


  const todoListMapper = todoList.map((todo, index) =>
    <li key={index}>
      <p>{todo.todo}</p>
    </li>
  )


  return (
    <div className="flex flex-col gap-4 w-full p-4 lg:p-8 rounded-3xl bg-pink-50">
      <div className="flex justify-between items-center gap-12">
        <input className="w-full px-3 py-2 rounded-2xl text-xl" value="" />
        <button className="base-btn text-xl px-3 pb-1 pt-2">Add+</button>
      </div>
      <div className="bg-pink-200 p-4 w-full rounded-2xl">
        <ul className="flex flex-col">
          {todoListMapper}
        </ul>
      </div>
    </div>
  );
}
