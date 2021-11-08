import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
	people: Props['people'];
	setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: '',
		age: '',
		url: '',
		note: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target;

		setInput({ ...input, [name]: value });
	};

	const handleClick = (): void => {
		const { name, age, url, note } = input;
		if (!name || !age || !url) return;

		setPeople([
			...people,
			{
				name,
				age: parseInt(age),
				url,
				note,
			},
		]);

		setInput({
			name: '',
			age: '',
			url: '',
			note: '',
		});
	};

	return (
		<div className="AddToList">
			<input
				type="text"
				placeholder="Name"
				className="AddToList-input"
				name="name"
				value={input.name}
				onChange={handleChange}
			/>
			<input
				type="number"
				placeholder="Age"
				className="AddToList-input"
				name="age"
				value={input.age}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Image URL"
				className="AddToList-input"
				name="url"
				value={input.url}
				onChange={handleChange}
			/>
			<textarea
				placeholder="Notes"
				className="AddToList-input"
				value={input.note}
				name="note"
				onChange={handleChange}
			/>
			<button className="AddToList-btn" onClick={handleClick}>
				Add to List
			</button>
		</div>
	);
};

export default AddToList;
