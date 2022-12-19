import React from 'react';

interface Person {
	name: string;
	email: string;
	age: number;
	occupation: string;
	numOfCats: number;
	dailyWaterConsumption: number;
	location: string;
}

const Table = () => {
	return <div>Table</div>;
};

export { Table };
export type { Person };
