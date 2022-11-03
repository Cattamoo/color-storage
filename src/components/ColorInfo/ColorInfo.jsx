import React from 'react';
import styles from './ColorInfo.module.css';

export default function ColorInfo({ color, deleteColor }) {
	const handleDelete = () => {
		deleteColor(color);
	}
	return (
		<li className={styles.container}> {/* TODO: 클릭 시 복사 */}
			<div className={styles.color} style={{ backgroundColor: color }} />
			<span>{ color.toUpperCase() }</span>
			<span style={{ color: color }}>Text Color</span>
			<div style={{ backgroundColor: color }}>
				<div className={styles.colorBlack}>Background Color</div>
				<div className={styles.colorWhite}>Background Color</div>
			</div>
			<button onClick={handleDelete}>🗑️</button>
		</li>
	);
}