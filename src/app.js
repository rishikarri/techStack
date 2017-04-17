import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';
import { Header } from './components/common/index.js';
import LibraryList from './components/LibraryList.js'


// need to pass style a property of flex 1 so that we it takes up the full length of the screen 

const App = () => {
	return (
		<Provider store={createStore(reducers)}> 
			<View style={{flex: 1}}>
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View >
		</Provider>
	);
};

export default App;