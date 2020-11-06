import React from 'react';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Logo from './component/Logo/Logo';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './component/FaceRecognition/FaceRecognition';
import Rank from './component/Rank/Rank';
import Particles from 'react-particles-js';

import Signin from './component/Signin/Signin';
import Register from './component/Register/Register';
import tachyons from 'tachyons';

var mapData = [];

  const particlesOptions2 = {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800
			},
			shape: { 
				enable: true,
		        type: 'image',
		        stroke: {
		          width: 0,
		          color: '#000000'
		        }
		    }    
		}
	}
  }

  const initialState = {
  			input:'https://variety.com/wp-content/uploads/2020/10/blackpink.jpg',
  			imageUrl: '',
  			box: {},
  			no_of_people: 0,
  			route: 'signin',
  			isSignedIn: false,
  			user : {
  				id: '',
				name: '',
				email: '',
				entries: 0,
				joined: ''
  			}
  }
            
  class App extends React.Component {
	constructor() {
  		super();
  		this.state = {
  			input:'https://variety.com/wp-content/uploads/2020/10/blackpink.jpg',
  			imageUrl: '',
  			box: {},
  			no_of_people: 0,
  			route: 'signin',
  			isSignedIn: false,
  			user : {
  				id: '',
				name: '',
				email: '',
				entries: 0,
				joined: ''
  			}

  		}
  }

  loadUser = (data) => {
  	this.setState({user: {
  		id: data.id,
		name: data.name,
		email: data.email,
		entries: data.entries,
		joined: data.joined
  	}})
  	// console.log(data);
  }

 //  componentDidMount() {
	// fetch('http://localhost:3001')
	// .then(response => response.json())
	// .then(console.log)
 //  }

  calculateFaceLocation = (data) => {

  		// const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const clarifaiFaceArray = data.outputs[0].data.regions;
		const image  = document.getElementById('inputimage');
		const width  = Number(image.width);
		const height = Number(image.height);

		console.log(clarifaiFaceArray);

		mapData = clarifaiFaceArray.map((num) => {
			const myLoc = num.region_info.bounding_box;
  			return {
				top:              myLoc.top_row * height,
				bottom: height - (myLoc.bottom_row * height),
				left:             myLoc.left_col * width,
				right:  width  - (myLoc.right_col * width)
			}
  		})

		this.setState({no_of_people: mapData.length});
  		
  		console.log(this.state.no_of_people);

  		
		return mapData;

		// return {
		// 		top:              clarifaiFace.top_row * height,
		// 		bottom: height - (clarifaiFace.bottom_row * height),
		// 		left:             clarifaiFace.left_col * width,
		// 		right:  width  - (clarifaiFace.right_col * width)
		// }


  }

  displayFaceBox = (box) => {
  	console.log(box);
  	this.setState({box: box});
  }


  onInputChange = (event) => {
  		console.log(event.target.value);
 		this.setState({input: event.target.value});
  		
  		// this.setState({input: document.getElementById("input_url").value});
  		// console.log(this.state.input);
  }

  onButtonSubmit = (event) => {
	    console.log('click');
	   
	    this.setState({imageUrl: this.state.input}); // setState is async
	    
		    fetch('http://localhost:3001/imageurl', {
		    		method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						input: this.state.input
					})
		    })
			.then(response => response.json())
		    .then(response => {
		    	fetch('http://localhost:3001/image', {
		    		method: 'put',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						id: this.state.user.id
					})
		    	})
		    .then(response => response.json())
		    .then(count => {
		    		this.setState(Object.assign(this.state.user, {entries: count}))
			})    
			.catch(console.log)		
			
	    this.displayFaceBox(this.calculateFaceLocation(response))
	    })
		    
		.catch(err => console.log(err));

		// AI Model
		  // GENERAL_MODEL: 'aaa03c23b3724a16a56b629203edc62c',
		  // FOOD_MODEL: 'bd367be194cf45149e75f01d59f77ba7',
		  // TRAVEL_MODEL: 'eee28c313d69466f836ab83287a54ed9',
		  // NSFW_MODEL: 'e9576d86d2004ed1a38ba0cf39ecb4b1',
		  // WEDDINGS_MODEL: 'c386b7a870114f4a87477c0824499348',
		  // WEDDING_MODEL: 'c386b7a870114f4a87477c0824499348',
		  // COLOR_MODEL: 'eeed0b6733a644cea07cf4c60f87ebb7',
		  // CLUSTER_MODEL: 'cccbe437d6e54e2bb911c6aa292fb072',
		  // FACE_DETECT_MODEL: '53e1df302c079b3db8a0a36033ed2d15',
		  // LOGO_MODEL: 'c443119bf2ed4da98487520d01a0b1e3',
		  // DEMOGRAPHICS_MODEL: 'c0c0ac362b03416da06ab3fa36fb58e3',
		  // GENERAL_EMBED_MODEL: 'bbb5f41425b8468d9b7a554ff10f8581',
		  // FACE_EMBED_MODEL: 'e15d0f873e66047e579f90cf82c9882z',
		  // APPAREL_MODEL: 'e0be3b9d6a454f0493ac3a30784001ff',
		  // MODERATION_MODEL: 'd16f390eb32cad478c7ae150069bd2c6',
		  // TEXTURES_AND_PATTERNS: 'fbefb47f9fdb410e8ce14f24f54b47ff',
		  // LANDSCAPE_QUALITY: 'bec14810deb94c40a05f1f0eb3c91403',
		  // PORTRAIT_QUALITY: 'de9bd05cfdbf4534af151beb2a5d0953',
		  // CELEBRITY_MODEL: 'e466caa0619f444ab97497640cefc4dc'


		// console.log(this.state.input);
		// console.log(this.state.inputUrl);
  }

  // .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))

  onRouteChange = (route) => {
  	 if (route === 'home') {
  	 	this.setState({isSignedIn: true})
  	 } else {
  	 	this.setState(initialState)
  	 }
  	 this.setState({route: route});
  }



  render() {
  	  // const {isSignedIn, imageUrl, route, box, no_of_people} = this.state;
  	  const {isSignedIn, imageUrl, route, no_of_people, input} = this.state;
      return (
          <div>
         	  <Particles className='particles' params={particlesOptions2}/>
              <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} /> 

              { route === 'home'   
	              ? <div>
			              <Logo />
			              <Rank no_of_people={no_of_people} user={this.state.user}/>
			              <ImageLinkForm 
			              		onButtonSubmit={this.onButtonSubmit} 
			              		onInputChange={this.onInputChange}
			              />
			              <FaceRecognition box={mapData} imageUrl={imageUrl}/>
		            </div>
		          : (
		          	  route === 'signin' 
		          	  ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
		              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
		            )
	          }

          {/*If I use box={box}, it will fail to run box.map at child class */}
          </div>
        )
  }
}

export default App;
