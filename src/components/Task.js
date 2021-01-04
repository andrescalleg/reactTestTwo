import React from 'react'
import PropTypes from 'prop-types'

class Task extends React.Component{

    render(){
        return(
            <div>
                <h3>{this.props.info.title}</h3>
                <div>{this.props.info.id} - {this.props.info.description} - {this.props.info.done}</div>
                <input type = "checkbox" onChange={this.props.checkDone.bind(this, this.props.info.id)}/>
                <button onClick = {this.props.deleteTask.bind(this, this.props.info.id)}>
                    Delete
                </button>
            </div>
        )
    }
}

Task.propTypes = {
    info: PropTypes.object.isRequired        
}

export default Task;