
import { interpret } from 'xstate';
import appMachine from './appmachine';

const appService = interpret(appMachine).start();


const xstatem = {

	set(key, value) {
	
		appService.send({ type: 'SET_VALUE', key, value });
	
	},
	
	get(key) {
	
		const currentState = appService.state.context.appWide;
		
		return currentState[key];
	
	}

};

export { appService, xstatem };
