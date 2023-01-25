import '../styles/components/List.css';

export const List = ({ children }) => {
	return (
		<div className='list'>
			<ul>{children}</ul>
		</div>
	);
};
