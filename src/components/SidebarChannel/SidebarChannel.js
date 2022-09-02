import React from 'react'
import './SidebarChannel.css'

function SidebarChannel({ channel }) {
  return (
    <div className='sidebarChannel'>
        <h4>
          <span className="sidebarChannel__hash">#</span>
          {channel.channelName.channelName}
        </h4>
    </div>
  )
}

export default SidebarChannel