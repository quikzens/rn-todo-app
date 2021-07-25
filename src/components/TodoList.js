import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { FlatList, Text } from 'native-base'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  // init context
  const { getTodos, uncompletedTodos, completedTodos, isLoading } =
    useContext(TodoContext)

  // init props
  const { navigation } = props

  const _renderItem = ({ item }) => {
    return <TodoItem navigation={navigation} item={item} />
  }

  return (
    <>
      {uncompletedTodos.length > 0 && (
        <>
          <Text fontSize='xl' fontWeight='bold' mx={5} mb={1} mt={8}>
            Not Done
          </Text>
          <FlatList
            data={uncompletedTodos}
            renderItem={_renderItem}
            keyExtractor={(item) => item._id}
            refreshing={isLoading}
            onRefresh={getTodos}
          />
        </>
      )}
      {completedTodos.length > 0 && (
        <>
          <Text fontSize='xl' fontWeight='bold' mx={5} mb={1} mt={8}>
            Done
          </Text>
          <FlatList
            data={completedTodos}
            renderItem={_renderItem}
            keyExtractor={(item) => item._id}
            refreshing={isLoading}
            onRefresh={getTodos}
          />
        </>
      )}
    </>
  )
}

export default TodoList
