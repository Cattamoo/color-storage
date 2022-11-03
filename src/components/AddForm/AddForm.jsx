import React, {useState} from 'react';

export default function AddForm({ addColor }) {
	const [color, setColor] = useState('#000000');
	const handleSubmit = (e) => {
		e.preventDefault();
		const [color] = e.target;
		addColor(color.value);
	}
	return (
		<form onSubmit={handleSubmit}>
			<span>{ color }</span>
			<input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
			<button>Add</button>
		</form>
	);
}