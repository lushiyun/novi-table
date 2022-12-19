import React from 'react';

interface Person {
	id: string;
	name: string;
	email: string;
	age: number;
	occupation: string;
	number_of_cats: number;
	daily_water_consumption: number;
	location: string;
}

type Field = keyof Person;

const fields: Field[] = [
	'name',
	'email',
	'age',
	'occupation',
	'number_of_cats',
	'daily_water_consumption',
	'location',
];

interface RowProps extends Person {
	handleClick: () => void;
}

const Row: React.FC<RowProps> = (props) => {
	const { handleClick, ...person } = props;

	return (
		<tr onClick={handleClick}>
			{fields.map((field) => (
				<td key={field}>{person[field]}</td>
			))}
		</tr>
	);
};

export { Row };
