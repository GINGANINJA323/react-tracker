import './App.css';
import React from 'react';
import Calendar from 'react-calendar';

const styles = {
  text: {
    color: 'white'
  },

  header: {
    position: 'absolute',
    top: '5%'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header style={styles.header}>
          <h1 style={styles.text}>{'React Time Planner'}</h1>
        </header>
        <div>
          <Calendar
            minDetail={'month'}
          />
        </div>
      </div>
    );
  }
}

export default App;
