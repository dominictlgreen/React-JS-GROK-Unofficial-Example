
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./app-nav-ui.module.css";


import { AlignCenter } from 'react-feather';



const AppNavUI = () => {

	
	useEffect(() => {
	
		console.log("AppMenu rendered");
		
		// analytics/event tracking here..
	
	}, []);
	
	
	const navigate = useNavigate();
	
	const OpenMenu = () => {
	
		navigate("/appmenu");
	
	};
	
	return (
	
		<div className="appnavui flex flex-center-v">
		
			<div className="flex flex-1 flex-center-v">
			
				<AlignCenter size={38} color="#191919" className="my-icon" onClick={OpenMenu}/>
			
			</div>
			
			<div className="imagebrand flex flex-3 flex-center-v">
			
				<img
					src="/brand/grok-brand-micro-a-c.png"
					alt="Grok AI For Personal, Business, Mars & Beyond.."
					className={styles.imagebrand}
				/>
			
			</div>
			
			<div className="userimg flex-1 flex-end-h">
			
				<img src="/cache/1727968341810.jpg"
					alt="User Profile Picture"
					className="br-5"
				/>
			
			</div>
		
		</div>
	
	);

};

export default AppNavUI;
