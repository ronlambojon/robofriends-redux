import React from 'react';

import Card from '../card/card.component';

const CardList = ({ robots }) => (
  <div className='card-list'>
    {
      robots.map((robot, i) => (
        <div className='dib' key={i}>
          <Card id={robot.id} name={robot.name} email={robot.email}/>
        </div>
      ))
    }
  </div>
);

export default CardList;