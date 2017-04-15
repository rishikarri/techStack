import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js'



const App = () => {
	return (
		<Provider store={createStore(reducers)}> 
			<View />
		</Provider>
	);
};