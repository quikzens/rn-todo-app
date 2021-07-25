import React, { createContext, useState } from 'react'
import { API, configJSON } from '../config/axios'

export const TodoContext = createContext()

export const TodoContextProvider = (props) => {
  // init props
  const { children } = props

  // init state
  const [uncompletedTodos, setUncompletedTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])
  const [isLoading, setLoading] = useState(false)

  const getTodos = async () => {
    setLoading(true)

    const response = await API.get('/todos')
    if (response.data.status === 'failed') {
      return console.log(response.data.message)
    }

    const todos = response.data.data
    const uncompleted = todos.filter((todo) => !todo.isCompleted)
    const completed = todos.filter((todo) => todo.isCompleted)

    setUncompletedTodos(uncompleted)
    setCompletedTodos(completed)
    setLoading(false)
  }

  const deleteTodo = async (id) => {
    const response = await API.delete(`/todo/${id}`, configJSON)
    if (response.data.status === 'failed') {
      return console.log(response.data.message)
    }

    getTodos()
  }

  const addTodo = async (title) => {
    const response = await API.post('/todo', { title }, configJSON)
    if (response.data.status === 'failed') {
      return console.log(response.data.message)
    }

    getTodos()
  }

  const completeTodo = async (id) => {
    const response = await API.patch(
      `/todo/${id}`,
      { isCompleted: true },
      configJSON
    )
    if (response.data.status === 'failed') {
      return console.log(response.data.message)
    }

    getTodos()
  }

  const editTodo = async (id, title) => {
    const response = await API.patch(`/todo/${id}`, { title }, configJSON)
    if (response.data.status === 'failed') {
      return console.log(response.data.message)
    }

    getTodos()
  }

  return (
    <TodoContext.Provider
      value={{
        getTodos,
        deleteTodo,
        addTodo,
        editTodo,
        completeTodo,
        isLoading,
        completedTodos,
        uncompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
