import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext.js'
import { Button, Input, Text, Box } from 'native-base'

const AddTodo = ({ navigation }) => {
  // init context
  const { addTodo } = useContext(TodoContext)

  // init state
  const [title, setTitle] = useState('')

  const handleChange = (text) => {
    setTitle(text)
  }

  const handleSubmit = () => {
    addTodo(title)
    navigation.goBack()
  }

  return (
    <Box>
      <Text fontSize='lg' fontWeight='bold' mx={5} mb={1} mt={8}>
        Add new todo
      </Text>
      <Input
        w='100%'
        m={3}
        placeholder='todo title'
        value={title}
        onChangeText={handleChange}
      />
      <Button m={5} onPress={handleSubmit}>
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
    </Box>
  )
}

export default AddTodo
