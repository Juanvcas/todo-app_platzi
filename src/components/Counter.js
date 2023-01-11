import '../styles/components/Counter.css';

export const Counter = ({ completed, total }) => {
	return (
		<div className='counter'>
			<h2>
				{total
					? `You have completed ${completed} of ${total} ${
							total > 0 ? 'tasks' : 'task'
					  }`
					: `You dont have task`}
			</h2>
		</div>
	);
};
