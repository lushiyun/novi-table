import React from 'react';

import styles from './sidebar.module.css';

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
	isOpen: boolean;
	onClose: () => void;
}> = ({ id, isOpen, onClose }) => {
	const additionalInfo = additionalInfos.find((info) => info.id === id);

	return (
		<aside className={`${styles.sidebar} ${isOpen && styles.open}`}>
			{additionalInfo ? (
				<>
					<h2>Additional Info</h2>

					<ul className={styles['info-list']}>
						{titleFieldMap.map(({ title, field }) => (
							<li>
								{title}: {additionalInfo[field]}
							</li>
						))}
					</ul>
				</>
			) : (
				<h2>Not Found</h2>
			)}

			<button
				className={styles.close}
				aria-label="close sidebar"
				onClick={onClose}
			>
				<svg
					width="100%"
					height="100%"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</button>
		</aside>
	);
};

export { Sidebar };
