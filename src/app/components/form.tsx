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
    e.preventDefault()
    const newTask = {
      id: crypto.randomUUID(),
      text: input,
      completed: false,
    };
    onSubmit(newTask)
    // this should clear th field
    setInput("")
  }

  return (
    <form className="task-form flex mb-6 items-center justify-center " onSubmit={handleSend}>
      <input
        className="task-input fixed w-full max-w-xl px-4 py-2 m-auto mb-8 border border-gray-200 rounded-full shadow-xl bottom-4 hover:bg-slate-700"
        type="text"
        placeholder="Add a new task and press enter 😎"
        name="text"
        onChange={handleChange}
        value={input}
        required
      />
    </form>
  );
}
