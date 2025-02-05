
import { configureStore, createSlice } from '@reduxjs/toolkit';

const aiModeSlice = createSlice({

	name: 'aiMode',
	
	initialState: 'gmode',
	
	reducers: {
	
		setAiMode: (state, action) => action.payload
	
	}

});

const uiModeSlice = createSlice({

	name: 'uiMode',
	
	initialState: 'light',
	
	reducers: {
	
		toggleUiMode: (state) => (state === 'light' ? 'dark' : 'light')
	
	}

});

const mpipeSlice = createSlice({

	name: 'mpipe',
	
	initialState: {
	
		conversation: [
		
			{ role: 'system', content: 'Hey, what do you want to talk about?' },
		
		],
	
	},
	
	reducers: {
	
		setConversation: (state, action) => {
		
			state.conversation = action.payload;
		
		},
		
		addMessage: (state, action) => {
		
			state.conversation.push(action.payload);
		
		}
	
	}

});

export const { setAiMode } = aiModeSlice.actions;
export const { toggleUiMode } = uiModeSlice.actions;
export const { setConversation, addMessage } = mpipeSlice.actions;

const store = configureStore({

	reducer: {
	
		aiMode: aiModeSlice.reducer,
		uiMode: uiModeSlice.reducer,
		mpipe: mpipeSlice.reducer
	
	}

});

export default store;
