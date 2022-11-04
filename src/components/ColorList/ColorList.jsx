import React, {useEffect, useState} from 'react';
import ColorInfo from "../ColorInfo/ColorInfo";
import AddForm from "../AddForm/AddForm";
import styles from './ColorList.module.css';

export default function ColorList({ viewMode }) {
	const [colors, setColors] = useState([]);
	const handleAddColor = (newColor) => {
		setColors(prev => {
			const _colors = prev.includes(newColor) ? prev : [...prev, newColor];
			localStorage.setItem('colors', JSON.stringify(_colors));
			return _colors;
		});
	}
	const handleDeleteColor = (deleteColor) => {
		setColors(prev => {
			const _colors = prev.filter(color => color !== deleteColor);
			localStorage.setItem('colors', JSON.stringify(_colors));
			return _colors;
		});
	}
	useEffect(() => {
		const _colors = localStorage.getItem('colors');
		setColors(_colors != null ? JSON.parse(_colors) : []);
	}, []);
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