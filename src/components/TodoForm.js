import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/components/TodoForm.css';

export const TodoForm = () => {
	const { todos, saveTodos, modal, setModal } = useContext(TodoContext);

	const cancelTodo = () => {
		setModal(!modal);
	};
	const addTodo = (e) => {
		e.preventDefault();
		const taskText = document.querySelector('#taskText').value;
		const task = {
			task: taskText,
			completed: false,
		};
		const newTodos = [...todos, task];
		saveTodos(newTodos);
		setModal(!modal);
	};

	return (
		<form
			className='todoForm'
			onSubmit={addTodo}
			onClick={(e) => e.stopPropagation()}
		>
			<h2>Add a Task</h2>
			<label>
				<span>Task name</span>
				<textarea id='taskText' placeholder='buy eggs' />
			</label>
			<div className='todoForm-butt'>
				<button type='button' onClick={cancelTodo}>
					Cancel
				</button>
				<button type='submit'>Add</button>
			</div>
		</form>
	);
};
