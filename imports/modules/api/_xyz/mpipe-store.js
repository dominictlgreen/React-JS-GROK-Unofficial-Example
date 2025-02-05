
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversation: [
    { role: "system", content: "Hey, what do you want to talk about?" },
  ],
};

const mpipeSlice = createSlice({
  name: "mpipe",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.conversation.push(action.payload);
    },
    setConversation: (state, action) => {
      state.conversation = action.payload;
    },
  },
});

export const { addMessage, setConversation } = mpipeSlice.actions;

export default mpipeSlice.reducer;
