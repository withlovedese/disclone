import React from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import './Chat.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifBoxIcon from '@mui/icons-material/GifBox';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from '../Message/Message';

function Chat() {
  return (
    <div className='chat'>
      
      <ChatHeader />
      
      <div className="chat__messages">

        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />

      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize='large'/>

        <form action="">
          <input type="text" placeholder='Message #gacha luck'/>
          <button type="submit" className='chat__inputButton'>Send</button>
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