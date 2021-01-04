import React from 'react'
import Task from './Task'

class Tasks extends React.Component{
    render(){
        return(
            this.props.tasks.map( e => 
                <Task info = {e} key = {e.id} 
                    deleteTask = {this.props.deleteTask}
                    checkDone = {this.props.checkDone}
                />
            )
        )
    }
}


export default Tasks;