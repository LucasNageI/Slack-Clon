// Channels.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Channels.css';

export const Channels = ({ channel }) => {

  const channel_map = channel.map((channel) => {
    return (
      <Link to={channel.name} className='btn-channel-container' key={channel.id}>
        <span><i className="bi bi-hash"></i></span>
        <span className='channel-name-span'>{channel.name}</span>
      </Link>
    )})

  return (
    <div>
      {channel_map}
    </div>
  );
};

export default Channels;
