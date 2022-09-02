import React from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetIcon from '@mui/icons-material/Headset';
import { useSelector } from 'react-redux';
import { selectUser } from '../Reducers/userSlice';
import db, { auth } from '../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { onSnapshot, collection, addDoc } from "firebase/firestore";

function Sidebar() {
  const user = useSelector(selectUser);
  //channels state
  const [channels, setChannels] = useState([]);
  const channelRef = collection(db, 'channels');

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name')
    if (channelName){
      addDoc(channelRef, {
        channelName: channelName,
      })
    }
  }

  useEffect(() => {
    onSnapshot(channelRef, (channel) => {
      setChannels(channel.docs.map((item) => ({
        id: item.id,
        channelName: item.data()
      })))
    })
  }, [channelRef])

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>A.M.E CHAT!</h3>
        <ExpandMoreIcon></ExpandMoreIcon>
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon></ExpandMoreIcon>
            <h4>Text channel</h4>
          </div>

          <AddIcon className="sidebar__addChannel" onClick={handleAddChannel}></AddIcon>
        </div>

        <div className="sidebar__channelsList">
          {channels.map(({ id, channelName }) => {
            return (<SidebarChannel channelName={channelName.channelName} key={id} id={id}/>)
          })}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon fontSize='large' className='sidebar__voiceIcon'></SignalCellularAltIcon>
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Streaming...</p>
        </div>

        <div className="sidebar__voiceIcons">
          <CallIcon />
          <InfoOutlinedIcon />

        </div>
      </div>

      <div className="sidebar__profile">
        <div className="sidebar__profileIcon">
          <Avatar onClick={() => auth.signOut()} src={user.photo} />
        </div>
        
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <SettingsIcon />
          <HeadsetIcon />

        </div>
      </div>

      
    </div>
  )
}

export default Sidebar