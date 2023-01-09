import '../styles/components/List.css';

export const List = (props) => {
	return (
		<div className='list'>
			<ul>{props.children}</ul>
		</div>
	);
};
