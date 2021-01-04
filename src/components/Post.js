import React from 'react'

class Post extends React.Component{
    
    state = {
        post : []
    }


    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
       this.setState({post: data})
    }

    render(){
        return (
            <div>
                <h1>Nada</h1>
                {
                    this.state.post.map(post => {
                        return <div>
                            <h1>{post.id}</h1>
                        </div>
                    })
                }
            </div>
            
        )
    }
}

export default Post;