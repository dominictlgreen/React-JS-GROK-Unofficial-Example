
import React, { useEffect } from "react";

import styles from "./ai-mode-grok.module.css";

import { Terminal } from 'react-feather';


import AIMicroOptions from './ai_micro_options';
import AIMicroInput from './ai_micro_input';

import MPipeUI from './mpipe_ui';


const AIModeGrok = () => {


	useEffect(() => {
	
		console.log("page: ai_basic: rendered: gmode component" );
	
	}, []);
	
	return (
	
		<div className="ai-mode-grok">
		
			<AIMicroOptions />
			
			<MPipeUI />
		
			{/*<div className="ai-micro-flag">
			
				<h2> <Terminal size={30} className="ui-micro-icon" /> AI Mode </h2>
				
				<p>What's the topic of discussion today?</p>
			
			</div>*/}
			
			<AIMicroInput />
		
		</div>
	
	);

};

export default AIModeGrok;
