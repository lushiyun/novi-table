import React, { memo } from 'react';

import { MemoizedRow } from './Row';
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
					<MemoizedRow
						key={person.id}
						{...person}
						handleClick={() => selectRow(person.id)}
					/>
				))}
			</tbody>
		</table>
	);
};

const MemoizedTable = memo(Table);

export { MemoizedTable };
