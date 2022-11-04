import React from 'react';
import styles from './ColorInfo.module.css';

export default function ColorInfo({ viewMode, color, deleteColor }) {
	const handleDelete = () => {
		deleteColor(color);
	}
	const handleCopy = () => {
		navigator.clipboard.writeText(color).then(() => console.log(`Copy ${color}`));
	}
	return (
		<li className={`${styles.container} ${styles[viewMode]}`}>
			<div className={styles.color} style={{ backgroundColor: color }} onClick={handleCopy} />
			<span>{ color.toUpperCase() }</span>
			<span className={styles.textColor} style={{ color: color }}>Text Color</span>
			<div className={styles.bgColors} style={{ backgroundColor: color }}>
				<div className={styles.colorBlack}>Background Color</div>
				<div className={styles.colorWhite}>Background Color</div>
			</div>
			<button onClick={handleDelete}>🗑️</button>
		</li>
	);
}