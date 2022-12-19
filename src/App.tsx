import { useState } from 'react';

import { Table } from './components/Table';
import './App.css';
import { Sidebar } from './components/Sidebar';

function App() {
	const [selectedId, setSelectedId] = useState<string | null>(null);

	return (
		<div className="App">
			<Table onRowClick={(id: string) => setSelectedId(id)} />

			<Sidebar id={selectedId as string} />
		</div>
	);
}

export default App;
