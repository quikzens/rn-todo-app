import React, { useEffect, useContext } from 'react'
import { Button, Text, ScrollView } from 'native-base'
import TodoList from '../components/TodoList'
import { TodoContext } from '../context/TodoContext'

const ListTodo = (props) => {
  // init context
  const { getTodos } = useContext(TodoContext)

  // init props
  const { navigation } = props

  // init lifecycle
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <ScrollView>
      <Button m={5} onPress={() => navigation.navigate('Add')}>
        <Text
          pt={1}
          fontSize='lg'
          fontFamily='body'
          fontWeight='bold'
          color='#fafafa'
        >
          Add Todo
        </Text>
      </Button>
      <TodoList navigation={navigation} />
    </ScrollView>
  )
}

export default ListTodo
