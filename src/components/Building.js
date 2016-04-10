import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import BuildingHeader from './BuildingHeader';
import BuildingBody from './BuildingBody';
import BuildingFooter from './BuildingFooter';

const Building = (props) => {
  return (
    <div>
      <BuildingHeader />
      <BuildingBody />
      <BuildingFooter />
    </div>
  );
};

export default Building;
