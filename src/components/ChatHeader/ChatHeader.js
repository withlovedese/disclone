import React from 'react'
import './ChatHeader.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import SendIcon from '@mui/icons-material/Send';
import InboxIcon from '@mui/icons-material/Inbox';

function ChatHeader({ channelName }) {
  return (
    <div className='chatHeader'>
        <div className="chatHeader__left">
        <span className="chatHeader__hash">#</span>
            <h3>
                { channelName }
            </h3>
        </div>
        <div className="chatHeader__right">
            <NotificationsIcon />
            <EditLocationAltIcon />
            <PeopleAltIcon />

            <div className="chatHeader__search">
                <input type="text" placeholder='Search'/>
                <SearchIcon />
                
            </div>
            <SendIcon />
            <HelpIcon />
            <InboxIcon />
        </div>
    </div>
  )
}

export default ChatHeader