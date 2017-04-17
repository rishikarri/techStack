// responsible for rendering list of libraries to the user 
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem.js';

// the instant the component renders we can tell listview where to get its data from 

class LibraryList extends Component {
	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2			
		});

		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	renderRow(library){
		return <ListItem library={library} />;
	}
	render() {
		return(
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);		
	}
}

// purpose of the function is sto take our global state object in our redux store, take them and provide them as props to our component in library list
const mapStateToProps = state => {
	return { 
		libraries: state.libraries
	}
};
export default connect(mapStateToProps)(LibraryList);


