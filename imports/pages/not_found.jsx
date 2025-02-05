
import React from 'react';

import { Link } from 'react-router-dom';


export default function NotFound() {

	console.log("NotFound Loaded");
	
	return (
	
		<div>
		
			<h1>Sorry, nothing here..</h1>
			<Link to="/ai-basic">Back</Link>
		
		</div>
	
	)

}
