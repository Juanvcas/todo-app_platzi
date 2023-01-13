import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import '../styles/components/Task.css';

export const Task = (props) => {
	const completeTask = (task) => {
		const index = props.todos.findIndex((todo) => todo.task === task);
		const newTodos = [...props.todos];
		newTodos[index].completed
			? (newTodos[index].completed = false)
			: (newTodos[index].completed = true);
		props.saveTodos(newTodos);
	};

	const deleteTask = (task) => {
		const index = props.todos.findIndex((todo) => todo.task === task);
		const newTodos = [...props.todos];
		newTodos.splice(index, 1);
		props.saveTodos(newTodos);
	};

	return (
		<li className={`task ${props.status && 'completed'}`}>
			<div className='task_cont'>
				<span>
					<BsCheckCircleFill onClick={() => completeTask(props.task)} />
				</span>
				<h3>{props.task}</h3>
			</div>
			<span className='task_close'>
				<BsFillXCircleFill onClick={() => deleteTask(props.task)} />
			</span>
		</li>
	);
};
