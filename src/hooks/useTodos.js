import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTodos = () => {
	const initialData = [
		{
			task: '¡Add a task to begin!',
			completed: false,
		},
	];

	const { todos, saveTodos } = useLocalStorage('TODOApp_v1', initialData);
	const [search, setSearch] = useState();
	const [modal, setModal] = useState(false);

	let searchList = todos;

	if (search) {
		searchList = todos.filter((todo) =>
			todo.task.toLowerCase().includes(search.toLowerCase())
		);
		console.log(search);
	} else {
		searchList = todos;
	}
	return {
		todos,
		saveTodos,
		search,
		setSearch,
		searchList,
		modal,
		setModal,
		initialData,
	};
};
