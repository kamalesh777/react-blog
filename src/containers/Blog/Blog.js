import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';
import Header from '../../components/Header/Header';

class Blog extends Component {
    state = {
        posts : [],
        selectedPostId: null
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
            return <Post key={p.id} title={p.title} author={p.author} clicked={()=>this.showFull(p.id)}/>
        })

        
        return (
            <div>
                <Header />
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;