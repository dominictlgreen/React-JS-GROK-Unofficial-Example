
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import ReactMarkdown from "react-markdown";
//import remarkGfm from "remark-gfm";

import styles from './mpipe-ui.module.css';


const MPipeUI = () => {

	
	const messages = useSelector((state) => state.mpipe.conversation); // get conversation from redux..
	
	const bottomRef = useRef(null);
	
	console.log("MPipeUI messages:", messages);
	
	
	// auto-scroll to the bottom when messages update..
	
	useEffect(() => {
	
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	
	}, [messages]);
	
	
	const markdownComponents = {
        strong: ({ children }) => (
            <strong style={{ display: "block", marginTop: "5px", marginBottom: "0px", color: "rgba(25, 25, 25, 0.8)" }}>
                {children}
            </strong>
        ),
        h3: ({ children }) => (
            <h3
                style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "600",
                    fontSize: "1.2em",
                    color: "rgba(25, 25, 25, 0.8)",
                }}
            >
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p style={{ marginTop: "2px", marginBottom: "5px"}}>
                {children}
            </p>
        ),
    };
	
	
	return (
	
		<div className="mpipe-window" style={{
                height: "400px", // Constrain vertical height
                overflowY: "auto", // Allow vertical scrolling
                overflowX: "hidden", // Prevent horizontal scrolling
                wordWrap: "break-word", // Wrap long words
                whiteSpace: "pre-wrap", // Preserve line breaks and allow natural wrapping
                display: "block", // Ensure proper block layout
            }}>
		
			{messages.map((msg, index) => (
			
				<div key={index} className={`message ${msg.role}`}>
				
					<ReactMarkdown components={markdownComponents}>{msg.content}</ReactMarkdown>
				
				</div>
			
			))}
			
			<div ref={bottomRef}></div>
		
		</div>
	
	);

};

export default MPipeUI;
