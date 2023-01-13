import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import { Counter } from './components/Counter';
import { Search } from './components/Search';
import { List } from './components/List';
import { Task } from './components/Task';
import { AddTaskButton } from './components/AddTaskButton';
import './styles/App.css';

function App() {
	const { todos, saveTodos, searchList } = useContext(TodoContext);
	return (
		<main className='app'>
			<section className='header-cont'>
				<div className='app_header'>
					<h1>
						¡Good <span>Morning!</span>
					</h1>
					<Counter />
					<Search />
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
								todos={todos}
								saveTodos={saveTodos}
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
