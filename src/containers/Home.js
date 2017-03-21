import React, { Component } from 'react'
import { ToDoo } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTextAction } from '../actions/action.js'

class Home extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){
		const { ToDoo } = this.props
		ToDoo()
	}

	render(){
		var { todo } = this.props
		return (

			<div>
				<ToDoo />
				{
					todo.list.map( t=>{
						return (
							<h3 key={t._id}>{t.text}</h3>
						)
					})
				}
			</div>
		)
	}
}

function mapStateToProps(state) { 
    return {  
        todo: state.todo 
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({   
        ToDoo: addTextAction
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)