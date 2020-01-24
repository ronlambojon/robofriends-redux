import React from 'react';

import Header from '../components/header/header.component';
import Searchbox from '../components/searchbox/searchbox.component';
import CardList from '../components/card-list/card-list.component';
import Scroll from '../components/scroll/scroll.components';


import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ robots: users }))
  }

  handleSearchfieldChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, console.log(this.state.searchfield));
  }

  render() {
    const { robots, searchfield } = this.state; 
    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length
      ? <h1>Loading</h1>
      : (
          <div className='tc'>
            <Header />
            <Searchbox handleSearchfieldChange={this.handleSearchfieldChange}/>
            <Scroll >
              <CardList robots={filteredRobot}/>
            </Scroll>
          </div>
        )
  }
}

export default App;
