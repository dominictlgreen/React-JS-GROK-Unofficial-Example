
import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./app-start.module.css";


export default function AppStart() {

	
	const navigate = useNavigate();
	
	
	useEffect(() => {
	
		const timer = setTimeout(() => {
		
			navigate("/ai-basic");
		
		}, 1500);
		
			return () => clearTimeout(timer);
	
	}, [navigate]);
	
	
	console.log("AppStart Loaded");
	
	
	return (
	
		<div className="page-wrapper">
		
			<div className="container">
			
				<div className="wrapper">
				
					<img
						src="/brand/grok-splash-a-a.png"
						alt="Responsive"
						className="brand-splash"
					/>
				
				</div>
				
			</div>
		
		</div>
	
	)

}
