
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setAiMode } from "../store";

import { Activity, FileText, Image, Codesandbox, Copy, Layers } from "react-feather";

import styles from "./ui-micro-modes.module.css";

const buttons = [

	{ id: "gmode", label: "Grok Text Mode", icon: <Copy size={38} className="icongrok" /> },
	{ id: "imode", label: "Image Gen Mode", icon: <Image size={38} className="icongrok" /> },
	{ id: "dmode", label: "Document Assist", icon: <FileText size={38} className="icongrok" /> },
	{ id: "vmode", label: "Voice Input Mode", icon: <Activity size={38} className="icongrok" /> },
	{ id: "amode", label: "Augmented Mode", icon: <Codesandbox size={38} className="icongrok" /> },
	{ id: "wmode", label: "Workflow Mode", icon: <Layers size={38} className="icongrok" /> },

];

const UIMicroModes = () => {

	const dispatch = useDispatch();
	const aiMode = useSelector((state) => state.aiMode);
	
	return (
	
		<div className="grid">
		
			{buttons.map((btn) => (
			
				<div
					key={btn.id}
					className={`button ${aiMode === btn.id ? "active" : ""}`}
					onClick={() => dispatch(setAiMode(btn.id))}
				>
				
					{btn.icon}
					
					<span>{btn.label}</span>
				
				</div>
			
			))}
		
		</div>
	
	);

};

export default UIMicroModes;
