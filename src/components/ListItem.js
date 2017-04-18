import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect }  from 'react-redux';
// connect is the window to redux from the react side of things
import { CardSection } from './common';
import * as actions from '../actions/index.js'

// import everything and call it actions from the actions index.js file
// if i want to export many things I just use the export word not export deault
// 8 as actions - give me everything that was exported from the actions file and assign it to the variable actions


class ListItem extends Component {

	componentWillUpdate(){
		LayoutAnimation.spring();
	}	

	renderDescription() {

		const { library, expanded } = this.props;

		if (expanded){
			return (

				<CardSection>
					<Text style={{flex:1}}>
						{library.description}
					</Text>
				</CardSection>
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


// ownprops is equal to library 
const mapStateToProps = (state, ownProps) => {	

	const expanded = state.selectedLibraryId === ownProps.library.id;	
	return { expanded };

}

export default connect(mapStateToProps, actions)(ListItem);

// take my action creators and pass them all down into the component as props //
// purpose of mapDispatchToProps is to bindall of the action creators ie select a list item action creator which is a function that calls an action to listitem componen