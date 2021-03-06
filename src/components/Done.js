import React, { useState, useEffect } from 'react';

import tickMArk from '../../assets/tick.svg';


const Done = ({ url }) => {
  const [src, setSrc] = useState('');
  const [notification, setNotification]  = useState({});
  
  useEffect(() => {
    setSrc(url);
  }, [url]);

  const handleClick = (event) => {
    navigator.clipboard.writeText(url);
    setNotification({
      message: 'link copied to clipboard',
      style: { color: 'blue' }
    });

    setTimeout(() => {
      setNotification({});
    }, 2500);
  };

  return (
    <>
      <div className='result'>
        <img className='tick-icon' src={tickMArk} alt='tick-mark' />
        <p>Uploaded Successfully!</p>
        <img className='uploaded-img' src={src} />
        <div className='copy-container'>
          <input type='text' value={url} readOnly />
          <button onClick={handleClick}>Copy Link</button>
        </div>
      </div>
      <p className='message' style={notification.style}>{notification.message}</p>
    </>
  );
};

export default Done;