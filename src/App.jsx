import {useState} from "react";
import ColorList from "./components/ColorList/ColorList";
import styles from './App.module.css';

function App() {
	const [viewMode, setViewMode] = useState('table'); // table | card
	return (
		<div className={styles.container}>
			<div className={styles.tab}>
				<button className={`${viewMode === 'table' && styles.active}`} onClick={() => setViewMode('table')}>Table</button>
				<button className={`${viewMode === 'card' && styles.active}`} onClick={() => setViewMode('card')}>Card</button>
			</div>
			<ColorList viewMode={viewMode} />
		</div>
	);
}

export default App;
