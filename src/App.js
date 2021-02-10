// @flow

import './App.css';
import * as React from 'react';
import Calendar from 'react-calendar';
import DetailsModal from './components/details-modal';

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

type State = {
  detailsOpen: boolean
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      detailsOpen: false
    };
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
        <DetailsModal
          isOpen={this.state.detailsOpen} 
          handleClose={() => this.setState({ detailsOpen: false })}
        />
      </div>
    );
  }
}

export default App;
