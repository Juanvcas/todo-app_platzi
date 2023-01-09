import { Counter } from './components/Counter';
import { Search } from './components/Search';
import { List } from './components/List';
import { Task } from './components/Task';
import { AddTask } from './components/AddTask';
import './styles/App.css';

const todos = [
	{
		task: 'take a shower',
		status: false,
	},
	{
		task: 'study english',
		status: true,
	},
	{
		task: 'buy eggs',
		status: true,
	},
	{
		task: 'make projects',
		status: true,
	},
	{
		task: 'call to friend',
		status: true,
	},
];

function App(props) {
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
						{todos.map((todo, index) => (
							<Task key={index} task={todo.task} status={todo.status} />
						))}
					</List>
				</div>
			</section>
			<AddTask />
		</main>
	);
}

export default App;
