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

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Twisted Wonderland</h3>
        <ExpandMoreIcon></ExpandMoreIcon>
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon></ExpandMoreIcon>
            <h4>Text channel</h4>
          </div>

          <AddIcon className="sidebar__addChannel"></AddIcon>
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel></SidebarChannel>
          <SidebarChannel></SidebarChannel>
          <SidebarChannel></SidebarChannel>
          <SidebarChannel></SidebarChannel>
          <SidebarChannel />
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
        <Avatar src='https://media.discordapp.net/attachments/914510715107311658/1014896158642028655/IMG_1523.jpg?width=912&height=513' />
        <div className="sidebar__profileInfo">
          <h3>withlovedese</h3>
          <p>#My ID</p>
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