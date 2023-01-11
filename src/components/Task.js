import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import '../styles/components/Task.css';

export const Task = (props) => {
	return (
		<li className={`task ${props.status && 'completed'}`}>
			<div className='task_cont'>
				<span>
					<BsCheckCircleFill onClick={() => props.completeTask(props.task)} />
				</span>
				<h3>{props.task}</h3>
			</div>
			<span className='task_close'>
				<BsFillXCircleFill onClick={() => props.deleteTask(props.task)} />
			</span>
		</li>
	);
};
