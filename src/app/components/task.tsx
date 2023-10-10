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
    <div className={completed ? "task-container completed flex justify-center gap-2 my-4 line-through" : "task-container flex justify-center gap-2 my-4 "}>
      <div
        className="task-text bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
