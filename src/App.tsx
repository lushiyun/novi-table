import { useState } from 'react';

import { Table } from './components/Table';
import './App.css';
import { Sidebar } from './components/Sidebar';

function App() {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleRowClick = (id: string) => {
		setSelectedId(id);
		setIsOpen(true);
	};

	return (
		<div className="App">
			<Table onRowClick={handleRowClick} isSidebarOpen={isOpen} />

			<Sidebar
				id={selectedId as string}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
}

export default App;
