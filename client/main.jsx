
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../imports/router";

import { Provider } from 'react-redux';
import store from '../imports/store';

import '../imports/css/app.css';

import '../imports/css/flex.css';
import '../imports/css/flex-frame.css';
import '../imports/css/fonts.css';

Meteor.startup(() => {

	const container = document.getElementById("react-target");
	const root = createRoot(container);
	
	// root.render(<App />);
	
	root.render(
	
		<Provider store={store}>
		
			<App />
		
		</Provider>
	
	);

});
