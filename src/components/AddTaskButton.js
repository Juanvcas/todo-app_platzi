import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import '../styles/components/AddTaskButton.css';

export const AddTaskButton = () => {
	const { modal, setModal } = useContext(TodoContext);

	const toggleModal = (e) => {
		e.stopPropagation();
		setModal(!modal);
	};

	return (
		<button className='addTaskButton' onClick={(e) => toggleModal(e)}>
			<BsFillPlusCircleFill />
		</button>
	);
};
