import React from 'react';
import "./imageLinkForm.css";

const ImageLinkForm = ({onButtonSubmit,onInputChange}) => {
	return (
			  <div>
				  <p className='f3 white'>
				  	{'This AI will detect faces in your pictures. Pleas try.'}
				  </p>
				  
			  	  <div className='center'>
			  	  	<div className='form pa4 br4 shadow-5 center'>
					  <input  placeholder="Please enter the URL of the image" onChange={onInputChange} id="input_url" className='f4 pa2 w-70 center' type='text' />
					  <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' type='submit' value='Submit'>Detect</button>
			      	</div>
			      </div>
			  </div>

	)
}

export default ImageLinkForm;

