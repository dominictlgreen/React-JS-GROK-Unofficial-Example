
import React, { useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleUiMode } from "../store";

import styles from "./app-menu.module.css";

import AppMenuProfile from '../mixed/app_menu_profile';

import { BarChart2, BookOpen, Circle, CreditCard, File, Grid, HardDrive, Image, List, Moon, Paperclip, Settings, Sliders, User, X, XSquare } from 'react-feather';


const menu_data = [

	{ main: "Profile", subtext: "My Info", icon: <User size={30} className="menuicon" /> },
	{ main: "Upgrade", subtext: "Get More Features", icon: <CreditCard size={30} className="menuicon" /> },
	{ main: "Instructions", subtext: "How To & Guides", icon: <BookOpen size={30} className="menuicon" /> },
	{ main: "AI Mode Options", subtext: "AI Configuration", icon: <Grid size={30} className="menuicon" /> },
	{ main: "Data Insights", subtext: "Stats & Usage", icon: <BarChart2 size={30} className="menuicon" /> },
	{ main: "Storage", subtext: "Data Usage", icon: <HardDrive size={30} className="menuicon" /> },
	{ main: "Settings", subtext: "App Preference", icon: <Settings size={30} className="menuicon" /> },
	{ main: "Privacy", subtext: "Privacy Options", icon: <File size={30} className="menuicon" /> },
	//{ main: "Night Mode", subtext: "Night Mode", icon: <Moon size={30} className="menuicon" /> }

];


export default function AppMenu() {

	
	const uiMode = useSelector((state) => state.uiMode);
	const dispatch = useDispatch();
	
	const navigate = useNavigate();
	
	const CloseMenu = () => {
	
		navigate("/ai-basic");
	
	};
	
	
	return (
	
		<div className="page-wrapper">
		
			<div className="app-menu">
			
				<div className="app-menu-top flex">		
					
					<div className="app-menu-text flex-3 flex-center-v">
					
						
					
					</div>
					
					<div className="app-menu-close flex-1 text-right flex-center-v">
					
						<X size={40} color="#191919" className="my-icon" onClick={CloseMenu}/>
					
					</div>
				
				</div>
				
				
				<AppMenuProfile />
				
				
				{/*--  --*/}
				
				
				<div className="app-menu-mid">
				
					{menu_data.map((item, index) => (
					
						<div className="app-menu-item flex" key={index}>
					
							<div className="app-menu-item-icon flex flex-center-v">
							
								{item.icon}
							
							</div>
							
							<div className="app-menu-item-text flex flex-3 flex-center-v">
						
								<h3>{item.main}</h3>
							
							</div>
						
						</div>
						
					))}
					
					
					<div className="app-menu-item flex">
					
						<div className="app-menu-item-icon flex flex-center-v">
						
							<Moon size={30} className="menuicon" />
							
						</div>
						
						<div
							className="app-menu-item-text flex flex-3 flex-center-v"
							onClick={() => dispatch(toggleUiMode())} // Dispatch toggle action
							style={{ cursor: "pointer" }}
						>
							
							<h3>{uiMode === 'light' ? 'Dark Mode' : 'Light Mode'}</h3>
						
						</div>
						
					</div>
				
				</div>
				
				
				{/*--  --*/}
				
				
				<div className="app-menu-base">		
					
					<span>xAI: Grok ©2025</span>
				
				</div>
				
			</div>
		
		</div>
	
	)

}
