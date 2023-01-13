import { useState } from 'react';

export const useLocalStorage = (localName, initialData) => {
	let todoList = initialData;

	const storageApp = localStorage.getItem(localName);

	if (storageApp) {
		const data = JSON.parse(storageApp);
		todoList = data.list;
	} else {
		const defautData = {
			list: todoList,
		};
		const todoApp = JSON.stringify(defautData);
		localStorage.setItem(localName, todoApp);
	}

	const [todos, setTodos] = useState(todoList);

	const saveTodos = (newTodos) => {
		const newData = { list: newTodos };
		localStorage.setItem(localName, JSON.stringify(newData));
		setTodos(newTodos);
	};

	return { todos, saveTodos };
};
