import React from 'react';

const Rank = ({no_of_people, user}) => {
	console.log(no_of_people);
	console.log(user);
	return (
		<div>
			<div className='white f3'>
				{'Hi ' + user.name + " , your rank is " + user.entries}
			</div>
			<div className='white f3'>
				{'There are ' + no_of_people + " peoples"}
			</div>
			
		</div>
	)
}

export default Rank;

