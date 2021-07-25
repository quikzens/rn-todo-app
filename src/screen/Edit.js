import React, { useState, useContext } from 'react'
import { Button, Input, Text, Box } from 'native-base'
import { TodoContext } from '../context/TodoContext'

const EditTodo = (props) => {
  // init context
  const { editTodo } = useContext(TodoContext)

  // init props
  const { route, navigation } = props
  const { id } = route.params

  // init state
  const [title, setTitle] = useState(route.params.title)

  const handleChange = (text) => {
    setTitle(text)
  }

  const handleSubmit = () => {
    editTodo(id, title)
    navigation.goBack()
  }

  return (
    <Box>
      <Text fontSize='lg' fontWeight='bold' mx={5} mb={1} mt={8}>
        Enter new title for your todo
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
          Update Todo
        </Text>
      </Button>
    </Box>
  )
}

export default EditTodo
