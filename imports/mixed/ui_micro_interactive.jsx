
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import AIModeGrok from './ai_mode_grok';
import AIModeImg from './ai_mode_img';
import AIModeAugmented from './ai_mode_augmented';

import styles from "./ui-micro-interactive.module.css";

const UIMicroInteractive = () => {

	const aiMode = useSelector((state) => state.aiMode);
	
	useEffect(() => {
	
		console.log("page: ai_basic: redux: aimode: ", aiMode);
	
	}, [aiMode]);
	
	
	const transitions = {
	
		default: {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
		},
		gmode: {
			initial: { opacity: 0, y: 50 }, // Slide up
			animate: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: 50 },
		},
		imode: {
			initial: { opacity: 0, y: -50 }, // Slide down
			animate: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: -50 },
		},
		vmode: {
			initial: { scale: 0.8, opacity: 0 }, // Scale up and fade
			animate: { scale: 1, opacity: 1 },
			exit: { scale: 0.8, opacity: 0 },
		},
		fmode: {
			initial: { x: -100, opacity: 0 }, // Slide in from left
			animate: { x: 0, opacity: 1 },
			exit: { x: 100, opacity: 0 }, // Slide out to right
		}
	
	};
	
	
	const transition = transitions[aiMode] || transitions.default;
	
	
	const renderComponent = () => {
	
		switch (aiMode) {
		
			case 'gmode':
			return <AIModeGrok />;
			case 'imode':
			return <AIModeImg />;
			case 'amode':
			return <AIModeAugmented />;
			default:
			return <p>Invalid AI Mode</p>;
		
		}
	
	};
	
	return (
	
		<div className="ui-micro-interactive">
		
			<AnimatePresence mode="wait"> {/* Ensures proper exit/enter animations */}
			
				<motion.div
					key={aiMode} // Key ensures the animation triggers on mode change
					initial={transition.initial}
					animate={transition.animate}
					exit={transition.exit}
					transition={{ duration: 0.3 }}
					style={{ height: "100%" }}
				>
				
					{renderComponent()}
				
				</motion.div>
			
			</AnimatePresence>
		
		</div>
	
	);

};

export default UIMicroInteractive;
