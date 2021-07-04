// react imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// component imports
import HomePage from './views/HomePage';
import Seven from './views/Seven';

import NotFound from './views/NotFound';


export default function Routes(){
	return (
		<Switch>
			<Route exact path="/">
				<HomePage/>
			</Route>
			<Route exact path="/seven">
				<Seven/>
			</Route>
			<Route>
				<NotFound/>
			</Route>
		</Switch>
	)
}