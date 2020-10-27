import React from 'react';
import Tilt from 'react-tilt';
import "./Logo.css";
import qits_logo from '../../qits-logo-v2.svg';
 
const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="br2 shadow-2 ba b--yellow-20 Tilt" 
				options={{ max : 50 }} 
				style={{ height: 80, width: 100 }} >
					 <div className="pa3 Tilt-inner white">
					 		<a href='https://www.quick-it-support.com/'>
					 		    <img style={{paddingTop: '3px', paddingLeft: '3px'}} alt="Logo" 
					 		          src={qits_logo}/>
					 		</a>
					 </div>
			</Tilt>
		</div>
	);
}

export default Logo;