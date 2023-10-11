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
    <div className={completed ? "task-container completed flex gap-2 my-4 line-through" : "task-container flex justify-center gap-2 my-4 "}>
      <div
        className="task-text px-4 py-2 m-auto border bg-opacity-30 bg-blue-600 border-gray-200 rounded-xl shadow-2xl bottom-4 overflow-x w-screen"
        onClick={() => completeTask(id)}
      >
        {text}
      </div>
      <button className="task-icons-container " onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon text-xl mr-3" title="Delete task" />
      </button>
    </div>
  );
}
