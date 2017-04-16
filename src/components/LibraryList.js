// responsible for rendering list of libraries to the user 
import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
	render() {
		return; 
	}
}

// purpose of the function is to take our global state object in our redux store, take them and provide them as props to our component in library list
const mapStateToProps = state => {

};
export default connect()(LibraryList);


