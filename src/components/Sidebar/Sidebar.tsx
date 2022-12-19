import React from 'react';

import additionalInfos from '../../data/additionalInfo.json';

interface AdditionalInfo {
	id: string;
	phone_number: string;
	favorite_color: string;
	security_question: string;
	security_answer: string;
	education_level: string;
}

interface TitleFieldMap {
	title: string;
	field: keyof AdditionalInfo;
}

const titleFieldMap: TitleFieldMap[] = [
	{ title: 'Phone Number', field: 'phone_number' },
	{ title: 'Favorite Color', field: 'favorite_color' },
	{ title: 'Question', field: 'security_question' },
	{ title: 'Answer', field: 'security_answer' },
	{ title: 'Education Level', field: 'education_level' },
];

const Sidebar: React.FC<{
	id: string;
}> = ({ id }) => {
	const additionalInfo = additionalInfos.find((info) => info.id === id);

	if (!additionalInfo) {
		return <div>Not found</div>;
	}

	return (
		<aside>
			<h2>Additional Info</h2>
			<ul>
				{titleFieldMap.map(({ title, field }) => (
					<li>
						{title}: {additionalInfo[field]}
					</li>
				))}
			</ul>
		</aside>
	);
};

export { Sidebar };
