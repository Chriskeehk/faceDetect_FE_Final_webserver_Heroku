import React from 'react';

const Rank = ({no_of_people}) => {
	console.log(no_of_people);
	return (
		<div>
			<div className='white f3'>
				{'There are ' + no_of_people + " peoples"}
			</div>
			
		</div>
	)
}

export default Rank;

