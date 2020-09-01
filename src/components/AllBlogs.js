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
            <div className="container allBlogs" style={{ paddingTop: "50px" }}>
                {this.state.posts.length ? (
                    this.state.posts.map(post => {
                        return (
                            <div className="post card grey lighten-5" key={post.id}>
                                <div className="card-content teal-text text-darken-4">
                                    <NavLink to={'/blog/' + post.id}>
                                        <h2 className="card-title pink-text text-darken-4">{post.title}</h2>
                                    </NavLink>
                                    <article>{post.content}</article>
                                </div>
                            </div>
                        )
                    })
                ) : (
                        <div className="center teal-text text-darken-4">No posts to show yet :(</div>
                    )
                }

            </div>
        );
    }

}

export default AllBlogs;
