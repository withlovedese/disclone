import React, { useState } from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import './Chat.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifBoxIcon from '@mui/icons-material/GifBox';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../Reducers/appSlice';
import { selectUser } from '../Reducers/userSlice';
import { useEffect } from 'react';
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';

function Chat() {
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)
  const user = useSelector(selectUser)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {

    if (channelId){
      const channelsRef = doc(db, 'channels', channelId);
      const messagesRef = collection(channelsRef, 'messages')
      const q = query(messagesRef, orderBy("timestamp", "asc"))

      onSnapshot(q, (message) => {
        setMessages(message.docs.map((item) => item.data()))
      })
    }
  }, [channelId])

  const sendMessage = (e) => {
    e.preventDefault()

    const channelsRef = doc(db, 'channels', channelId);
    const messagesRef = collection(channelsRef, 'messages')
    addDoc(messagesRef, {
      timestamp: serverTimestamp(),
      message: input,
      user: user
    })
    setInput('')
  }

  return (
    <div className='chat'>
      
      <ChatHeader channelName={channelName}/>
      
      <div className="chat__messages">

        {messages.map((message) => {
          //console.log(message)
           return(
           <Message
              timestamp={message.timestamp}
              message={message.message}
              user={message.user}
            />
           )
        })}

      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize='large'/>

        <form action="">
          <input type="text" 
                  placeholder={`Message #${channelName}`} 
                  value={input}
                  onChange={ e => setInput(e.target.value)}
                  disabled={!channelId}
          />
          <button type="submit" className='chat__inputButton' onClick={sendMessage}>Send</button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize='large'/>
          <GifBoxIcon fontSize='large'/>
          <EmojiEmotionsIcon fontSize='large'/>

        </div>
      </div>
    </div>
  )
}

export default Chat