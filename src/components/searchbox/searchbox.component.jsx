import React from 'react';

const Searchbox = ({ handleSearchfieldChange }) => (
  <div className='searchbox pa2'>
    <input 
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      name='searchfield'
      placeholder='search robots'
      onChange={handleSearchfieldChange}
    />
  </div>
);

export default Searchbox;