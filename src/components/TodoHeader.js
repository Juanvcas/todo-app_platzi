import '../styles/components/TodoHeader.css';

export const TodoHeader = ({ children }) => {
	return (
		<div className='app_header'>
			<h1>
				¡Good <span>Morning!</span>
			</h1>
			{children}
		</div>
	);
};
