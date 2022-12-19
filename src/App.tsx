import { useState, useEffect } from 'react';

import { MemoizedTable } from './components/Table';
import './App.css';
import { Sidebar } from './components/Sidebar';

function App() {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleRowClick = (id: string) => {
		setSelectedId(id);
		setIsOpen(true);
	};

	const showMobileScreenAlert = () => {
		if (window.innerWidth < 768) {
			alert('This app is not optimized for mobile screens');
		}
	};

	useEffect(() => {
		showMobileScreenAlert();
	}, []);

	return (
		<div className="App">
			<MemoizedTable onRowClick={handleRowClick} isSidebarOpen={isOpen} />

			<Sidebar
				id={selectedId as string}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
}

export default App;
