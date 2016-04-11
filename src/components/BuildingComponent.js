import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import * as blueprintHelper from '../businessLogic/blueprintHelper';

class BuildingComponent extends React.Component {
  render() {
    let nodes = blueprintHelper.nodesFromBlueprint(this.props.blueprint);
    return (
      <div>
        {nodes}
      </div>
    );
  }
}

BuildingComponent.propTypes = { blueprint: React.PropTypes.object };

export default BuildingComponent;
