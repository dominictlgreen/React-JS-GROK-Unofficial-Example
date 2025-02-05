
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import AppStart from "./pages/app_start";
import AppMenu from "./pages/app_menu";
import AIBasicPage from "./pages/ai_basic";
import NotFound from './pages/not_found';

const splashVariants = {

	initial: { opacity: 0 },
	in: { opacity: 1 },
	out: { opacity: 1 }

};

const menuVariants = {

	initial: {
		opacity: 0, 
		x: "-100vw",
		backgroundColor: "#fbfbfb" // Start with soft grey
	},
	in: { 
		opacity: 1, 
		x: 0,
		backgroundColor: "#ffffff" // White on menu open
	},
	out: { 
		opacity: 0, 
		x: "-100vw",
		backgroundColor: "#fbfbfb" // Back to soft grey
	}

};

const aiBasicVariants = {

	initial: { opacity: 0, x: "100vw" },
	in: { opacity: 1, x: 0 },
	out: { opacity: 0, x: "-100vw" }

};

const transitionSettings = { duration: 0.5, ease: "easeInOut" };

const MotionWrapper = ({ children, variants, className }) => (

	<motion.div
		initial="initial"
		animate="in"
		exit="out"
		variants={variants}
		transition={transitionSettings}
		className={className}
		style={{
		height: '100%',
		width: '100%',
		paddingTop: 'env(safe-area-inset-top)',
		paddingBottom: 'env(safe-area-inset-bottom)',
		paddingLeft: 'env(safe-area-inset-left)',
		paddingRight: 'env(safe-area-inset-right)',
		backgroundColor: variants === menuVariants ? '#ffffff' : '#fbfbfb'
		}}
	>
		{children}
	
	</motion.div>

);

const SplashPage = () => (

	<MotionWrapper variants={splashVariants}>
	
		<AppStart />
	
	</MotionWrapper>

);

const MenuPage = () => (

	<MotionWrapper variants={menuVariants} className="menu-page">
	
		<AppMenu />
	
	</MotionWrapper>

);

const AIPage = ({ fromMenu }) => (

	<MotionWrapper variants={fromMenu ? aiBasicVariants : splashVariants}>
	
		<AIBasicPage />
	
	</MotionWrapper>

);

const AppRouter = () => {

	const location = useLocation();
	const fromMenu = location.state?.fromMenu || false;
	
	React.useEffect(() => {
	
		const root = document.documentElement;
		
		root.style.setProperty(
			"--background-color", 
			location.pathname === "/appmenu" ? "#ffffff" : "#fbfbfb"
		);
	
	}, [location.pathname]);
	
	return (
	
		<AnimatePresence mode="wait">
		
			<Routes location={location} key={location.pathname}>
			
				<Route path="/" element={<SplashPage />} />
				<Route path="/appmenu" element={<MenuPage />} />
				<Route path="/ai-basic" element={<AIPage fromMenu={fromMenu} />} />
				<Route path="*" element={<NotFound />} />
			
			</Routes>
			
		</AnimatePresence>
	
	);

};

export default function App() {

	return (
	
		<Router>
		
			<AppRouter />
		
		</Router>
	);

}
