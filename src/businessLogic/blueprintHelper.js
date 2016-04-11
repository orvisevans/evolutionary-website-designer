import React from 'react';
import BuildingComponent from '../components/BuildingComponent';

export function nodesFromBlueprint(blueprint) {
	if (Array.isArray(blueprint.structure)) {
		return blueprint.structure.map(node => {
			if (React.isValidElement(node)) {
				return node;
			} else {
				return <BuildingComponent blueprint={node} />;
			}
		});
	} else if (React.isValidElement(blueprint.structure)) {
		return blueprint.structure;
	} else {
		console.log(blueprint.structure);
		throw "nodesFromBlueprint was expecting either an array of React elements/blueprints or a React element.  Received: " + blueprint;
	}
}
