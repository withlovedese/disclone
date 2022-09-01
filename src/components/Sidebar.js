import React from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

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
      </div>
    </div>
  )
}

export default Sidebar