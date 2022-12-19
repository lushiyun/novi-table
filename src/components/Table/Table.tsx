import React from 'react';

import { Row } from './Row';

import persons from '../../data/persons.json';

const titles = [
	'Name',
	'Email',
	'Age',
	'Occupation',
	'Number of Cats',
	'Daily Water Consumption',
	'Location',
];

const Table: React.FC<{
	onRowClick: (id: string) => void;
}> = ({ onRowClick }) => {
	const selectRow = (id: string) => {
		onRowClick(id);
	};

	return (
		<table>
			<thead>
				<tr>
					{titles.map((title) => (
						<th>{title}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{persons.map((person) => (
					<Row
						key={person.id}
						{...person}
						handleClick={() => selectRow(person.id)}
					/>
				))}
			</tbody>
		</table>
	);
};

export { Table };
