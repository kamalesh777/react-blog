import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Post.css';
import Posts from '../../../components/Posts/Posts';
import Axios from 'axios';


class Post extends Component {
    state = {
        posts : [],
        // selectedPostId: null
    }
    
    componentDidMount() {
        Axios.get('/posts')
        .then(response=> {
            let post = response.data.slice(0, 6);
            let updatePost = post.map(p => {
               return{
                ...p,
                author : 'Kamalesh'
               } 

            })
            this.setState({posts: updatePost})
            // console.log(this.state.posts)
        })
        
    }

    showFull = (id) => {
        this.setState({
            selectedPostId : id
        })
    }
    

    render () {
        let post = this.state.posts.map(p => {
            return (
                <Link to={"post/"+p.id} key={p.id} className="Post">
                    <Posts title={p.title} author={p.author} clicked={()=>this.showFull(p.id)}/>
                </Link>
            )
        })

        
        return (
            <div className="PostsFlex">
                {post}
            </div>
        );
    }
}

export default Post;




