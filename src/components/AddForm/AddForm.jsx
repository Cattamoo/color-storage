import React, {useState} from 'react';
import styles from './AddForm.module.css';

export default function AddForm({ addColor }) {
	const [color, setColor] = useState('#000000');
	const handleSubmit = (e) => {
		e.preventDefault();
		/^#[0-9a-f]{6}/i.test(color) && addColor(color);
	}
	const handleInput = (e) => {
		let value = e.target.value;
		if(value.length > 7) {
			value = value.slice(0, 7);
		}
		if(value.indexOf('#') !== 0) {
			setColor(`#${value}`);
		} else {
			setColor(`#${value.replace(/[^0-9a-f]/gi, '')}`);
		}
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input type='text' value={color} onChange={handleInput} />
			<input type='color' value={color} onChange={handleInput} />
			<button>Add</button>
		</form>
	);
}