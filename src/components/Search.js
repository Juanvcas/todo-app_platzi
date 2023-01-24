import '../styles/components/Search.css';

export const Search = ({ setSearch }) => {
	const inputChange = (e, setSearch) => {
		setSearch(e.target.value);
	};

	return (
		<div className='search'>
			<input
				type='search'
				placeholder='Search a taks'
				onChange={(e) => inputChange(e, setSearch)}
			/>
		</div>
	);
};
