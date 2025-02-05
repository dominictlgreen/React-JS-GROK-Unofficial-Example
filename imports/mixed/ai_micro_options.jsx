
import React from 'react';
import { useSelector } from "react-redux";

import { Grid, Maximize2, Paperclip } from 'react-feather';

import styles from "./ai-micro-options.module.css";


export default function AIMicroOptions() {

	const aiMode = useSelector((state) => state.aiMode);
	
	const gridModes = ['gmode', 'imode', 'dmode', 'vmode', 'amode', 'wmode'];
	const fullscreenModes = ['gmode', 'imode', 'dmode', 'vmode', 'amode', 'wmode'];
	const paperclipModes = ['dmode', 'imode', 'amode', 'wmode'];
	
	const OpenOptions = () => {
	
		console.log("Options clicked for AI mode:", aiMode);
	
	};
	
	return (
	
		<div className="ai-micro-options">
		
			<div className="ai-micro-options-left">
			
				{gridModes.includes(aiMode) && (
				
					<div className="ai-micro-option">
					
						<Grid size={20} className="ai-micro-option-icon" onClick={OpenOptions} />
					
					</div>
				
				)}
			
			</div>
			
			
			<div className="ai-micro-options-right">
				
				{paperclipModes.includes(aiMode) && (
				
					<div className="ai-micro-option">
					
						<Paperclip size={20} className="ai-micro-option-icon" onClick={OpenOptions} />
					
					</div>
				
				)}
				
				{fullscreenModes.includes(aiMode) && (
				
					<div className="ai-micro-option">
					
						<Maximize2 size={20} className="ai-micro-option-icon" onClick={OpenOptions} />
					
					</div>
				
				)}
				
			</div>
		
		</div>
	
	);

}
