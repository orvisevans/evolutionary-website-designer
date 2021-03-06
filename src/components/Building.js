import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import BuildingComponent from './BuildingComponent';
import * as blueprintHelper from '../businessLogic/blueprintHelper';
import initBlueprint from '../seeds/initBlueprint';

class Building extends React.Component {
  render() {
    let nodes = blueprintHelper.nodesFromBlueprint(this.props.blueprint);
    return (
      <div>
        {nodes}
      </div>
    );
  }
}

Building.propTypes = { blueprint: React.PropTypes.object };
Building.defaultProps = { blueprint: initBlueprint };

export default Building;
