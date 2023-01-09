import '../styles/components/Search.css';

export const Search = () => {
	const inputChange = (e) => {
		console.log(e.target.value);
	};
	return (
		<div className='search'>
			<input type='search' placeholder='Search a taks' onChange={inputChange} />
		</div>
	);
};
