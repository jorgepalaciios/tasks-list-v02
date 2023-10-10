
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
      <div className="tasks-list-container flex-col justify-between items-center p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
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