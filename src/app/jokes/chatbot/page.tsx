'use client'

import { Box, Container, IconButton, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { FaRobot, FaUser } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'

import { useLazyGetRandomJokeQuery } from '@/store/slices/apiSlice'
import { Message } from '@/types/chatbot'

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [triggerGetRandomJoke, { data: joke, isSuccess }] = useLazyGetRandomJokeQuery()

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: Message = { text: message, isBot: false }

    setMessages(prevMessages => [...prevMessages, userMessage])

    // Trigger the API call to get a random joke
    triggerGetRandomJoke(undefined)
  }

  useEffect(() => {
    if (isSuccess && joke) {
      const fullBotMessage = `${joke.setup} - ${joke.punchline}`
      let currentIndex = 0
      const botMessage: Message = { text: '', isBot: true }

      const intervalId = setInterval(() => {
        currentIndex++
        botMessage.text = fullBotMessage.substring(0, currentIndex)
        setMessages(prevMessages => {
          const lastMessage = prevMessages[prevMessages.length - 1]

          if (lastMessage && lastMessage.isBot) {
            return [...prevMessages.slice(0, -1), botMessage]
          }

          return [...prevMessages, botMessage]
        })

        if (currentIndex === fullBotMessage.length) {
          clearInterval(intervalId)
        }
      }, 10)
    }
  }, [isSuccess, joke])

  return (
    <Container maxWidth='md' className='p-4 sm:p-6 md:p-8'>
      <Typography variant='h4' component='h1' className='text-center sm:text-left' gutterBottom>
        Jokes Chatbot
      </Typography>
      <Box className='chat-window rounded bg-gray-100 p-4 shadow-md' sx={{ height: '60vh', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <Box key={index} className={`message ${msg.isBot ? 'bot' : 'user'} mb-2 flex items-center`}>
            {msg.isBot ? <FaRobot className='mr-2 text-blue-500' /> : <FaUser className='mr-2 text-green-500' />}
            <Typography variant='body1' className={msg.isBot ? 'text-blue-700' : 'text-green-700'}>
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className='mt-4 flex items-center'>
        <TextField
          variant='outlined'
          fullWidth
          placeholder='Type a message'
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSendMessage((e.target as HTMLInputElement).value)
              ;(e.target as HTMLInputElement).value = ''
            }
          }}
        />
        <IconButton
          color='primary'
          onClick={() => {
            const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement

            handleSendMessage(inputElement.value)
            inputElement.value = ''
          }}
        >
          <MdSend />
        </IconButton>
      </Box>
    </Container>
  )
}
