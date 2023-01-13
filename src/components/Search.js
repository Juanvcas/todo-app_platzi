import { TodoContext } from '../context/TodoContext';
import '../styles/components/Search.css';

export const Search = () => {
	const inputChange = (e, setSearch) => {
		setSearch(e.target.value);
	};

	return (
		<TodoContext.Consumer>
			{({ search, setSearch }) => (
				<div className='search'>
					<input
						type='search'
						placeholder='Search a taks'
						onChange={(e) => inputChange(e, setSearch)}
					/>
				</div>
			)}
		</TodoContext.Consumer>
	);
};
