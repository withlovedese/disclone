import React from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material'

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
        <Avatar />
      </div>

      
    </div>
  )
}

export default Sidebar