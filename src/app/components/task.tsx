import React from "react";

import { AiOutlineCloseCircle } from "react-icons/ai"

interface TaskProps {
  id: string;
  text: string;
  completed: boolean;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function Task({
  id,
  text,
  completed,
  completeTask,
  deleteTask,
}: TaskProps){
  return (
    <div className= "static flex justify-center gap-2 my-4 ">
      <div
        className={completed ? "completed text-center bottom-4 line-through px-4 py-2 m-auto border  bg-red-900 border-gray-200 rounded-xl shadow-2xl overflow-x w-screen " : " px-4 py-2 m-auto border bg-slate-800 border-gray-500 rounded-xl shadow-2xl overflow-x w-screen hover:bg-green-900 text-center"}
        onClick={() => completeTask(id)}
      >
        {text}
      </div>
      <button className="task-icons-container " onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon text-xl mr-3 text-slate-300 hover:text-red-700" title="Delete task" />
      </button>
    </div>
  );
}
