import React from 'react';

export const initBlueprint = {
	name: 'body',
	seedIndex: undefined,
	style: {},
	structure: [
		{
			name: 'header',
			seedIndex: undefined,
			style: {},
			structure: [
				<h1 key="title">Title</h1>,
				<h2 key="subtitle">Subtitle</h2>,
				{
					name: 'nav',
					seedIndex: undefined,
					style: {},
					structure: (
						<ul>
							<a href="#"><li>Home</li></a>
							<a href="#"><li>When</li></a>
							<a href="#"><li>Where</li></a>
							<a href="#"><li>What</li></a>
						</ul>
					)
				}
			]
		},{
			name: 'body',
			seedIndex: undefined,
			style: {},
			structure: [
				<h3 key="paragraph-1-title">Body Text</h3>,
				<p key="paragraph-1-body">Lorem Ipsum dolor set.</p>
			]
		},{
			name: 'footer',
			seedIndex: undefined,
			style: {},
			structure: [
				<span key="footer-1">Find us online</span>
			]
		}
	]

};
