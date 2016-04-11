import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import EditorMenubar from './EditorMenubar';
import Building from './Building';
import * as seeds from '../seeds/initBlueprint';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentBlueprint: seeds.initBlueprint};
  }
  render() {
    return (
      <div>
        <EditorMenubar />
        <Building blueprint={this.state.currentBlueprint}/>
      </div>
    );
  }
}

export default App;
