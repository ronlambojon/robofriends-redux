import React from 'react';

const Scroll = (props) => (
  <div 
    className='scroll'
    style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}
  >
    { props.children }
  </div>
);

export default Scroll