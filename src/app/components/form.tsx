
import React, { useState } from "react"

interface Task {
  id: string
  text: string
  completed: boolean
}

interface TaskFormProps {
  onSubmit: (task: Task) => void
}

export default function TaskForm({ onSubmit }: TaskFormProps){
  const [input, setInput] = useState("")

  // e is for event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      text: input,
      completed: false,
    };
    onSubmit(newTask);
  };

  return (
    <form className="task-form flex mb-6 items-center justify-center " onSubmit={handleSend}>
      <input
        className="task-input fixed w-full max-w-xl px-4 py-2 m-auto mb-8 border border-gray-200 rounded-full shadow-2xl bottom-4"
        type="text"
        placeholder="Add a new task and press enter 😎"
        name="text"
        onChange={handleChange}
        required
      />
      {/* <button className="task-button text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      type="submit"
      >Add New Task</button> */}
    </form>
  );
}
