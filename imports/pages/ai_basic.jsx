
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import styles from "./ai-basic.module.css";

import AppNavUI from '../mixed/app_nav_ui';
import UIMicroInteractive from '../mixed/ui_micro_interactive';
import UIMicroModes from '../mixed/ui_micro_modes';



export default function AIBasicPage() {
	
	useEffect(() => {
	
		console.log("AppMenu rendered");
		
		// analytics/event tracking here..
	
	}, []);
	
	
	return (
	
		<div className={styles.aibasic}>
		
			<div className="page-wrapper">
		
				<AppNavUI />
				
				<UIMicroInteractive />
				<UIMicroModes />
			
			</div>
			
		</div>
	
	)

}
