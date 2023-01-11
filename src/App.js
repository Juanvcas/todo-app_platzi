import { useEffect, useState } from 'react';
import { Counter } from './components/Counter';
import { Search } from './components/Search';
import { List } from './components/List';
import { Task } from './components/Task';
import { AddTaskButton } from './components/AddTaskButton';
import './styles/App.css';

const defaultTodos = [
	{
		task: 'take a shower',
		completed: false,
	},
	{
		task: 'study english',
		completed: false,
	},
	{
		task: 'buy eggs',
		completed: false,
	},
	{
		task: 'make projects',
		completed: false,
	},
	{
		task: 'call to friend',
		completed: false,
	},
];

function App() {
	const [todos, setTodos] = useState(defaultTodos);
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

	const completeTask = (task) => {
		const index = todos.findIndex((todo) => todo.task === task);
		const newTodos = [...todos];
		newTodos[index].completed
			? (newTodos[index].completed = false)
			: (newTodos[index].completed = true);
		setTodos(newTodos);
	};

	const deleteTask = (task) => {
		const index = todos.findIndex((todo) => todo.task === task);
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<main className='app'>
			<section className='header-cont'>
				<div className='app_header'>
					<h1>
						¡Good <span>Morning!</span>
					</h1>
					<Counter
						completed={todos.filter((todo) => todo.completed).length}
						total={todos.length}
					/>
					<Search search={search} setSearch={setSearch} />
				</div>
			</section>
			<section className='list-cont'>
				<div className='app_list'>
					<List>
						{searchList.map((todo, index) => (
							<Task
								key={index}
								task={todo.task}
								status={todo.completed}
								completeTask={completeTask}
								deleteTask={deleteTask}
							/>
						))}
					</List>
				</div>
			</section>
			<AddTaskButton />
		</main>
	);
}

export default App;
