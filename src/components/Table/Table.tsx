import React from 'react';

import { Row } from './Row';
import styles from './table.module.css';

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
	isSidebarOpen: boolean;
}> = ({ onRowClick, isSidebarOpen }) => {
	const selectRow = (id: string) => {
		onRowClick(id);
	};

	return (
		<table
			className={`${styles.table} ${
				isSidebarOpen ? styles['location-hidden'] : ''
			}`}
		>
			<thead className={styles.head}>
				<tr>
					{titles.map((title) => (
						<th key={title}>{title}</th>
					))}
				</tr>
			</thead>

			<tbody className={styles.body}>
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
