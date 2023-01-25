import { useTodos } from './hooks/useTodos';
import { TodoHeader } from './components/TodoHeader';
import { Counter } from './components/Counter';
import { Search } from './components/Search';
import { List } from './components/List';
import { Task } from './components/Task';
import { AddTaskButton } from './components/AddTaskButton';
import { Modal } from './Modal';
import { TodoForm } from './components/TodoForm';
import './styles/App.css';

function App() {
	const { todos, saveTodos, setSearch, searchList, modal, setModal } =
		useTodos();
	return (
		<>
			<main className='app'>
				<section className='header-cont'>
					<TodoHeader>
						<Counter todos={todos} />
						<Search setSearch={setSearch} />
					</TodoHeader>
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
				<AddTaskButton modal={modal} setModal={setModal} />
			</main>
			{modal && (
				<Modal modal={modal} setModal={setModal}>
					<TodoForm
						todos={todos}
						saveTodos={saveTodos}
						modal={modal}
						setModal={setModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default App;
