import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Button, Box, Text, Flex } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TodoItem = (props) => {
  // init context
  const { deleteTodo, completeTodo } = useContext(TodoContext)

  // init props
  const { navigation, item } = props

  return (
    <Box
      p={5}
      m={5}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      rounded='md'
      my={2}
      bg='gray.50'
    >
      <Text>{item.title}</Text>
      <Flex flexDirection='row'>
        {!item.isCompleted && (
          <>
            <Button bg='white' onPress={() => completeTodo(item._id)}>
              <Icon name='check-square' size={16} color='#4caf50' />
            </Button>
            <Button
              bg='white'
              onPress={() => {
                navigation.navigate('Edit', {
                  id: item._id,
                  title: item.title,
                })
              }}
            >
              <Icon name='pencil-alt' size={16} color='#2196f3' />
            </Button>
          </>
        )}
        <Button bg='white' onPress={() => deleteTodo(item._id)}>
          <Icon name='trash' size={16} color='#f44336' />
        </Button>
      </Flex>
    </Box>
  )
}

export default TodoItem
