import { createPortal } from 'react-dom';
import './styles/Modal.css';

export const Modal = ({ children, modal, setModal }) => {
	return createPortal(
		<div id='modal-cont' onClick={() => setModal(!modal)}>
			{children}
		</div>,
		document.querySelector('#modal')
	);
};
