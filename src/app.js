import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';
import { Header } from './components/common/index.js';



const App = () => {
	return (
		<Provider store={createStore(reducers)}> 
			<View>
				<Header headerText="Tech Stack" />
			</View >
		</Provider>
	);
};