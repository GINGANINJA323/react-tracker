// @flow

import './App.css';
import * as React from 'react';
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

type Props = {};

type State = {};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): React.Node {
    return (
      <div className='App'>
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
