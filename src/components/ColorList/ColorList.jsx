import React, {useState} from 'react';
import ColorInfo from "../ColorInfo/ColorInfo";
import AddForm from "../AddForm/AddForm";
import styles from './ColorList.module.css';

export default function ColorList({ viewMode }) {
	const [colors, setColors] = useState([]); /* TODO: 로컬스토리지 저장 추가하기 */
	const handleAddColor = (newColor) => {
		setColors(prev => prev.includes(newColor) ? prev : [...prev, newColor]);
	}
	const handleDeleteColor = (deleteColor) => {
		setColors(prev => prev.filter(color => color !== deleteColor));
	}
	return (
		<>
			<ul className={`${styles.list} ${styles[viewMode]}`}>
				{
					colors.map(color => {
						return <ColorInfo key={color} viewMode={viewMode} color={color} deleteColor={handleDeleteColor} />
					})
				}
			</ul>
			<AddForm addColor={handleAddColor} />
		</>
	);
}