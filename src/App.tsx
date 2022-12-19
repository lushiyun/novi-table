import { useState } from 'react';

import { Table } from './components/Table';
import './App.css';

function App() {
	const [selectedId, setSelectedId] = useState<string | null>(null);

	return (
		<div className="App">
			<Table onRowClick={(id: string) => setSelectedId(id)} />
		</div>
	);
}

export default App;
