import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

const TodoProvider = (props) => {
	const initialData = [
		{
			task: '¡Add a task to begin!',
			completed: false,
		},
	];

	const { todos, saveTodos } = useLocalStorage('TODOApp_v1', initialData);
	const [search, setSearch] = useState();

	let searchList = todos;

	if (search) {
		searchList = todos.filter((todo) =>
			todo.task.toLowerCase().includes(search.toLowerCase())
		);
		console.log(search);
	} else {
		searchList = todos;
	}
	return (
		<TodoContext.Provider
			value={{ todos, saveTodos, search, setSearch, searchList, initialData }}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoProvider };
