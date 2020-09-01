import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

class AllBlogs extends Component {
    state = {
        posts: []
    }
    componentDidMount = () => {
        axios.get('https://blog-faf3e.firebaseio.com/posts.json').then(res => {
            let posts = [];
            for (let key in res.data) {
                res.data[key].id = key;
                posts.push(res.data[key]);
            }
            this.setState({
                posts
            });

        });
    }
    render() {
        return (
            <div className="container allBlogs">
                {this.state.posts.length ? (
                    this.state.posts.map(post => {
                        return (
                            <div className="post card" key={post.id}>
                                <div className="card-content">
                                    <NavLink to={'/' + post.id}>
                                        <h2 className="card-title grey-text">{post.title}</h2>
                                    </NavLink>
                                    <article>{post.content}</article>
                                </div>
                            </div>
                        )
                    })
                ) : (
                        <div className="center">No posts to show yet!!</div>
                    )
                }

            </div>
        );
    }

}

export default AllBlogs;
