
import React, { useEffect } from 'react';

import styles from "./app-menu-profile.module.css";


export default function AppMenuProfile() {

	return (
	
		<div className="app-menu-profile">
		
			<div className="app-menu-profile-img">
			
				<img src="/cache/1727968341810.jpg"
					alt="User Profile Picture"
					className="br-5"
				/>
			
			</div>
			
			<div className="app-menu-profile-name">
			
				<h3>Dominic Green</h3>
			
			</div>
			
			<div className="app-menu-profile-screename">
			
				<h4>@dominicgreen</h4>
			
			</div>
			
			<div className="app-menu-profile-meta">
			
				
			
			</div>
		
		</div>
	
	)

}

