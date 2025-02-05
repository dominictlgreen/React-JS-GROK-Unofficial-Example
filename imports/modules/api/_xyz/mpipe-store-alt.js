
const conversation = [
  { role: "system", content: "You are a test assistant." },
]; // Initial conversation

const mpipe = {
  get: () => [...conversation],

  set: (message) => {
    conversation.push(message);
    return [...conversation];
  },

  sendToAPI: async () => {
    try {
      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer xai-7uKbA5QdIekWTegliLuAWJCGLLdN9e4Sdc5nRACXJJKQ8pvXvQhvrhbQepK165uS13PSGR0nAZlLZ1b2",
        },
        body: JSON.stringify({
          messages: conversation, // Send full conversation
          model: "grok-beta",
          stream: false,
          temperature: 0,
        }),
      });

      const data = await response.json();
      const systemMessage = { role: "system", content: data.choices[0].message.content };
      conversation.push(systemMessage);
      return [...conversation];
    } catch (error) {
      console.error("API call failed:", error);
      return null;
    }
  },
};

export default mpipe;
