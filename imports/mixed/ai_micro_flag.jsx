
import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import styles from './ai-micro-flag.module.css';

import { Terminal } from 'react-feather';


const modeDetails = {

	gmode: { title: "Grok Mode", description: "What's the topic of discussion today?" },
	imode: { title: "Image Generator Mode", description: "Let's create some amazing visuals!" },
	dmode: { title: "Document Assist Mode", description: "Need help with your documents?" },
	vmode: { title: "Voice Mode", description: "How can I assist with voice inputs?" },
	amode: { title: "Augmented Mode", description: "Expanding your capabilities with AI!" },
	wmode: { title: "Workflow Mode", description: "Streamline your workflows effectively." },

};


export default function AIMicroFlag() {
	
	
	const aiMode = useSelector((state) => state.aiMode);
	
	const { title, description } = modeDetails[aiMode] || { title: "Unknown Mode", description: "No details available for this mode." };
	

	useEffect(() => {
	
		console.log("page: ai_basic: rendered: ai_micro_flag" );
	
	}, []);
	
	return (
	
		<div className="ai-micro-flag">
		
			<h2> <Terminal size={30} className="ui-micro-icon" /> {title} </h2>
			
			<p>{description}</p>
		
		</div>
	
	);

}

// export default memo(AIMicroFlag);

// memo prevents unnecessary re-renders of AIMicroFlag
// ..unless its props or Redux state (via useSelector) change.
