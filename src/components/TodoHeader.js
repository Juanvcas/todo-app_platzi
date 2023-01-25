import { useEffect, useState } from 'react';
import '../styles/components/TodoHeader.css';

export const TodoHeader = ({ children }) => {
	const [dayTime, setDayTime] = useState('Day!');
	useEffect(() => {
		setInterval(() => {
			const time = new Date().getHours();
			console.log(time);
			if (time >= 5) {
				setDayTime('Morning!');
			} else if (time >= 12) {
				setDayTime('Afternoon!');
			} else if (time >= 18) {
				setDayTime('Evening!');
			} else if (time >= 21) {
				setDayTime('Night!');
			}
		}, 1000);
	}, []);
	return (
		<div className='app_header'>
			<h1>
				¡Good <span>{dayTime}</span>
			</h1>
			{children}
		</div>
	);
};
