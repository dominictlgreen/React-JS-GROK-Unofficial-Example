import { setConversation } from "../../store";

export const sendToAPI = async (dispatch, conversation) => {
    try {
        // Log the client-side conversation array before sending it
        console.log("Client-side conversation array:", conversation);

        console.log("Payload being sent to API:", JSON.stringify({ messages: conversation }));

        const response = await fetch("https://api.x.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "*** YOUR GROK API KEY HERE ***",
            },
            body: JSON.stringify({
                messages: conversation,
                model: "grok-beta",
                stream: false,
                temperature: 0,
            }),
        });

        const data = await response.json();

        // Log the API response
        console.log("API response:", data);

        // Extract the system message and log it
        const systemMessage = { role: "system", content: data.choices[0].message.content };
        console.log("System message from API:", systemMessage);

        // Update the conversation array and log it
        const updatedConversation = [...conversation, systemMessage];
        console.log("Updated conversation array:", updatedConversation);

        // Dispatch the updated conversation to Redux
        dispatch(setConversation(updatedConversation));
    } catch (error) {
        console.error("API call failed:", error);
    }
};
