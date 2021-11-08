import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState['people']>([
		{
			name: 'LeBron James',
			age: 35,
			url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
			note: 'Allegeric to staying on the same team',
		},
		{
			name: 'Kobe Bryant',
			age: 42,
			url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5756e7c2a7ea43396db26e8d%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D126%26cropX2%3D575%26cropY1%3D37%26cropY2%3D487',
		},
	]);

	return (
		<div className="App">
			<h1>People Invited to My Party</h1>
			<List people={people} />
			<AddToList people={people} setPeople={setPeople} />
		</div>
	);
}

export default App;
