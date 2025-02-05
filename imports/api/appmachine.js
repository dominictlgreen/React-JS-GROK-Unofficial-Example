
import { createMachine, assign } from 'xstate';

const appMachine = createMachine({

	id: 'app',
	
	context: {
	
		appWide: {},
	
	},
	
	on: {
	
		SET_VALUE: {
		
			actions: assign({
			
				appWide: (context, event) => ({
				
					...context.appWide,
					[event.key]: event.value,
				
				}),
			
			}),
		
		},
	
	}

});

export default appMachine;
