import React from 'react';
import './App.css';
import tasksFile from './sample/tasks.json';
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Post from './components/Post'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends React.Component{

    state = {
        tasks: tasksFile
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        data.map(task => {this.addTask(task.title , task.body)})
    }

    addTask = (title, description) =>{
        const newTask = {
            title: title,
            description: description,
            id: this.state.tasks.length
        }
        this.setState({
            tasks:[...this.state.tasks, newTask]
        })
    }

    deleteTask = (id) =>{
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        }) 
        console.log(this.state.tasks)
    }

    checkDone = (id) => {
        this.setState ({tasls :
                this.state.tasks.map(tasks => {
                if(tasks.id === id){
                    tasks.done = !tasks.done 
                }
                return tasks;
            })
        })
    }

    render(){
        return (
            <div>
                <Router>
                    <Link to = "/">Home</Link>
                    <br></br>
                    <Link to = "/info">Post</Link>

                    <Route exact path="/" render = {() => {
                        return <div>
                                <TaskForm addTask={this.addTask}/>
                                <Tasks 
                                    tasks = {this.state.tasks} 
                                    deleteTask={this.deleteTask}
                                    checkDone={this.checkDone}
                                />
                            </div>
                        }}> 

                    </Route>

                    <Route path="/info" render = {() => {
                        return <Post></Post>
                    }}/>

                </Router>
                    
            </div>
        )
    }
}

export default App;