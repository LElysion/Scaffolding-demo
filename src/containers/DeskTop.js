import React, { Component } from 'react'
import { Link } from 'react-router'
/*
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
*/

class DeskTop extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){

	}

	render(){
		return (
			<div>
				<header>
					<Link to='/'>home</Link>
					<Link to='/about'>about</Link>
				</header>
				{ this.props.children }
			</div>
		)
	}
}

export default DeskTop