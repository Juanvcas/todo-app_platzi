import { BsFillPlusCircleFill } from 'react-icons/bs';
import '../styles/components/AddTaskButton.css';

export const AddTaskButton = ({ modal, setModal }) => {
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
