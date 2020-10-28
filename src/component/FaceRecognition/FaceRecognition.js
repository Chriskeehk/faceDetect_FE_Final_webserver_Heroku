import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
	
	return (
		<div className='center ma'>
			<div className='absolute mt3'>
				<img id='inputimage'  src={imageUrl} width='600px' height='auto' />
				<div>
					{	
						box.map((item, i) => {
							return ( 
							<div className='bounding-box' key={i} 
											style={{
													top: item.top,
													right:item.right,
													bottom:item.bottom,
													left: item.left,
												  }}>
							</div>
							
							);
						})
					} 
					
				</div>
			</div>
		</div>
	)
}

export default FaceRecognition;


//https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s810/3_Beautiful-girl-with-a-gentle-smile.jpg
//https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/20190106_%28NEWSEN%29_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC_%28BLACKPINK%29%2C_%EC%88%98%EC%A4%8D%EC%9D%80_%EB%A7%8E%EC%9D%80_%EC%86%8C%EB%85%80%EC%A7%80%EB%A7%8C_%EB%8F%8B%EB%B3%B4%EC%9D%B4%EB%8A%94_%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4_%EB%AF%B8%EB%AA%A8_%28Golden_Disc_Awards_2019%29_%282%29.jpg/450px-20190106_%28NEWSEN%29_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC_%28BLACKPINK%29%2C_%EC%88%98%EC%A4%8D%EC%9D%80_%EB%A7%8E%EC%9D%80_%EC%86%8C%EB%85%80%EC%A7%80%EB%A7%8C_%EB%8F%8B%EB%B3%B4%EC%9D%B4%EB%8A%94_%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4_%EB%AF%B8%EB%AA%A8_%28Golden_Disc_Awards_2019%29_%282%29.jpg
