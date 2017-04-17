import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect }  from 'react-redux';
// connect is the window to redux from the react side of things
import { CardSection } from './common';
import * as actions from '../actions/index.js'

// import everything and call it actions from the actions index.js file
// if i want to export many things I just use the export word not export deault
// 8 as actions - give me everything that was exported from the actions file and assign it to the variable actions


class ListItem extends Component {

	

	renderDescription() {

		const { library, selectedLibraryId } = this.props;
		
		if (library.id === selectedLibraryId){
			return (
				<Text>
					{library.description}
				</Text>
			);
		}
	}
	render() {

		const { titleStyle } = styles;
		const { id, title } = this.props.library;
		

		return(
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title} </Text>
					</CardSection>

					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
};

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}


const mapStateToProps = state => {
	return { selectedLibraryId: state.selectedLibraryId };

}

export default connect(mapStateToProps, actions)(ListItem);

// take my action creators and pass them all down into the component as props //
// purpose of mapDispatchToProps is to bindall of the action creators ie select a list item action creator which is a function that calls an action to listitem componen