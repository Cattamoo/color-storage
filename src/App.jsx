import {useState} from "react";
import ColorInfo from "./components/ColorInfo/ColorInfo";
import AddForm from "./components/AddForm/AddForm";
import './App.css';

function App() {
	const [colors, setColors] = useState([]); /* TODO: 로컬스토리지 또는 파이어베이스 연동 추가하기 */
	const handleAddColor = (newColor) => {
		setColors(prev => prev.includes(newColor) ? prev : [...prev, newColor]);
	}
	const handleDeleteColor = (deleteColor) => {
		setColors(prev => prev.filter(color => color !== deleteColor));
	}
	return (
		<div>
			<ul>
			{
				colors.map(color => {
					return <ColorInfo key={color} color={color} deleteColor={handleDeleteColor} />
				})
			}
			</ul>
			<AddForm addColor={handleAddColor} />
		</div>
	);
}

export default App;
