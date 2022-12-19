import React from 'react';

import persons from '../../data/persons.json';

interface Person {
	id: string;
	name: string;
	email: string;
	age: number;
	occupation: string;
	numOfCats: number;
	dailyWaterConsumption: number;
	location: string;
}

const personTitles = [
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
					{personTitles.map((title) => (
						<th>{title}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{persons.map((person) => (
					<tr onClick={() => selectRow(person.id)}>
						<td>{person.name}</td>
						<td>{person.email}</td>
						<td>{person.age}</td>
						<td>{person.occupation}</td>
						<td>{person.number_of_cats}</td>
						<td>{person.daily_water_consumption}</td>
						<td>{person.location}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export { Table };
export type { Person };
