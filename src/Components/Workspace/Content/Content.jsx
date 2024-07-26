// Content.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Content.css';

export const Content = () => {
  const { clicked_btn } = useParams();

  return (
    <section className='content-section'>
      <div className='channel-DM-info'>
        <button className='channel-DM-info-btn'>
          <span className='channel-DM-name'>{clicked_btn}</span>
        </button>
      </div>
    </section>
  );
};

export default Content;
