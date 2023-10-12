"use client"

import { useState } from "react"

import TaskForm from "./form"
import Task from './task'

interface Tasks {
  id: string
  text: string
  completed: boolean
}

export default function TasksList() {

  const [tasks, setTasks] = useState<Tasks[]>([])

  const addTask = (task: Tasks) => {
    if (task.text.trim()) {
      task.text = task.text.trim()

      const updatedTasks = [task, ...tasks]
      setTasks(updatedTasks)
    }
  }

  const completeTask = (id: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const deleteTask = (id: string)=> {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="tasks-list-container bg-zinc-900 bg-opacity-50 overflow-y-auto max-w-xl h-96 w-screen px-4 py-2 m-auto  border border-gray-200 rounded-md shadow-md bottom-4 ">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}            
              text={task.text}
              completed={task.completed}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  )
}