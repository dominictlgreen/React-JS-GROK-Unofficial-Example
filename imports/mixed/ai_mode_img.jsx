
import React, { useEffect } from "react";

import styles from "./ai-mode-img.module.css";

import { Terminal } from 'react-feather';


import AIMicroOptions from './ai_micro_options';


const AIModeImg = () => {

	
	
	useEffect(() => {
	
		console.log("page: ai_basic: rendered: imode component" );
	
	}, []);
	
	return (
	
		<div className="ai-mode-img">
		
			<AIMicroOptions />
		
				<div className="ai-micro-flag">
				
				<h2>Smart Image Gen 2.0 </h2>
				
				<p>Let's create some amazing visuals!</p>
				
				</div>
		
		</div>
		
	
	);

};

export default AIModeImg;
