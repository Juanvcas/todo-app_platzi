import '../styles/components/Search.css';

export const Search = ({ search, setSearch }) => {
	const inputChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className='search'>
			<input type='search' placeholder='Search a taks' onChange={inputChange} />
		</div>
	);
};
