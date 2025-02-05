
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMessage } from "../store";

import { Send } from "react-feather";

import { sendToAPI } from "../modules/api/mpipe-api"; // Import sendToAPI directly


export default function AIMicroInput() {

	
	const [inputValue, setInputValue] = useState("");
	
	const conversation = useSelector((state) => state.mpipe.conversation); // get redux conversation state..
	
	const dispatch = useDispatch();
	
	
	const handleSend = async () => {
	
		
		if (inputValue.trim() === "") return;
		
		const userMessage = { role: "user", content: inputValue };
		
		
		// add the user message to redux immediately..
		
		const updatedConversation = [...conversation, userMessage];
		
		dispatch(addMessage(userMessage));
		
		
		// log the updated conversation before sending..
		
		console.log("Updated conversation before sending to API:", updatedConversation);
		
		
		setInputValue("");
		
		
		// pass the updated conversation to sendtoapi..
		
		await sendToAPI(dispatch, updatedConversation);
	
	};
	
	
	return (
	
		<div style={containerStyle}>
		
			<input
			
				type="text"
				placeholder="Message..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleSend()}
				style={inputStyle}
			
			/>
			
			<button
			
				onClick={handleSend}
				disabled={!inputValue.trim()}
				style={{
				...buttonStyle,
				color: inputValue.trim() ? "#0078FF" : "#ccc",
				}}
			
			>
			
				<Send size={20} />
			
			</button>
		
		</div>
	
	);

}


const containerStyle = {

	display: "flex",
	alignItems: "center",
	borderRadius: "10px",
	gap: "8px",
	padding: "5px 10px",
	backgroundColor: "#fff"

};

const inputStyle = {

	flex: 1,
	border: "none",
	padding: "10px",
	fontSize: "16px",
	borderRadius: "10px",
	outline: "none",
	boxShadow: "none",
	backgroundColor: "transparent"

};

const buttonStyle = {

	border: "none",
	background: "transparent",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "5px"

};
