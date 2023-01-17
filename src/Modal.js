import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from './context/TodoContext';
import './styles/Modal.css';

export const Modal = ({ children }) => {
	const { modal, setModal } = useContext(TodoContext);
	return ReactDOM.createPortal(
		<div id='modal-cont' onClick={() => setModal(!modal)}>
			{children}
		</div>,
		document.querySelector('#modal')
	);
};
