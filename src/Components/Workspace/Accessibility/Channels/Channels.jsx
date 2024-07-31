import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Channels.css';

export const Channels = ({channel}) => {

const { workspace_id } = useParams()
    let channel_id = channel.id /* hacer un find, esto ya tiene que ver con el acceso al localStorage */

  const channel_map = channel.map((channel) => {
    return (
      <Link to={`/Workspace/${workspace_id}/${channel_id}`} className='btn-channel-container' key={channel_id}>
        <span><i className="bi bi-hash"></i></span>
        <span className='channel-name-span'>{channel.name}</span>
      </Link>
    )})

  return (
    <div>
      {channel_map}
    </div>
  )
}

export default Channels