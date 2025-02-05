
import React, { useRef, useState, useEffect } from "react";

import { Camera } from "react-feather";

import styles from "./ai-mode-augmented.module.css";


const AIModeAugmented = () => {

	
	const videoRef = useRef(null);
	
	const [isCameraActive, setIsCameraActive] = useState(false);
	
	
	// start the camera when the component mounts
	
	useEffect(() => {
	
		startCamera();
		
		return () => stopCamera(); // clean up the camera on unmount
	
	}, []);
	
	
	const startCamera = async () => {
	
		try {
		
			const stream = await navigator.mediaDevices.getUserMedia({ video: true });
			
			if (videoRef.current) {
			
				videoRef.current.srcObject = stream;
				
				setIsCameraActive(true);
			
			}
		
		} catch (error) {
			
				console.error("Error accessing camera:", error);
		
		}
	
	};
	
	
	const stopCamera = () => {
	
		if (videoRef.current && videoRef.current.srcObject) {
		
			const tracks = videoRef.current.srcObject.getTracks();
			
			tracks.forEach((track) => track.stop());
			
			setIsCameraActive(false);
		
		}
	
	};
	
	return (
	
		<div className={styles.aimodeaugmented}>
		
			<div className={styles.cameraView}>
			
				<video
					ref={videoRef}
					autoPlay
					playsInline
					muted
					className={styles.videoFeed}
				/>
			
			</div>
			
			
			<button
				className={styles.circleButton}
				onClick={() => alert("Augmented mode triggered!")}
			>
			
				<Camera size={28} color="#fff" />
			
			</button>
		
		</div>
	
	);

};

export default AIModeAugmented;
