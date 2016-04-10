import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import EditorMenubar from './EditorMenubar';
import Building from './Building';

const App = (props) => {
  return (
    <div>
      <EditorMenubar />
      <Building />
    </div>
  );
};

export default App;
