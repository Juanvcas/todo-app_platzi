import { BsFillPlusCircleFill } from 'react-icons/bs';
import '../styles/components/AddTaskButton.css';

export const AddTaskButton = () => {
	return (
		<button className='addTaskButton'>
			<BsFillPlusCircleFill />
		</button>
	);
};
