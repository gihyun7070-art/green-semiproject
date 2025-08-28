import React, { useState } from "react";
import { postAdd } from "../../api/todoApi";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};
const AddComponent = () => {
  const [todo, setTodo] = useState({ ...initState });
  const handleChangeTodo = (e) => {
    const { name, value } = e.target;
    todo[name] = value;
    setTodo({ ...todo });
  };
  const handleClckAdd = () => {
    console.log(todo);
    postAdd(todo)
      .then((i) => {
        console.log(i);
        setTodo({ ...initState });
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <div className="border-2 border-sky-200 mt-10 m-2 p-4">
        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
            <input
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
              name="title"
              type="text"
              value={todo.title}
              onChange={handleChangeTodo}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
            <input
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
              name="writer"
              type="text"
              value={todo.writer}
              onChange={handleChangeTodo}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
            <button
              className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
              type="button"
              onClick={handleClckAdd}
            >
              추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
