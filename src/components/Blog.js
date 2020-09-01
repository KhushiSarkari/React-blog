import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    state = {
        post: null
    }
    componentDidMount = () => {
        let id = this.props.match.params.blog_id;
        axios.get(`https://blog-faf3e.firebaseio.com/posts/${id}.json`).then(res => {
            res.data.id = id;
            this.setState({
                post: res.data
            });
        });
    }
    render() {
        return (
            <div className="blog">
                {
                    this.state.post ? (
                        <div className="container">
                            <div className="post card grey lighten-5" key={this.state.post.id}>
                                <h2 className="card-title pink-text text-darken-4 center">{this.state.post.title}</h2>
                                <div className="card-content teal-text text-darken-4">
                                    <article>{this.state.post.content}</article>
                                    <p>Author: {this.state.post.author}</p>
                                    <p>Categories:</p>
                                    <ul>
                                        {
                                            this.state.post.categories.map(category => {
                                                return (<li> {category}</li>)
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    ) : (
                            <div className="center">Loading post...</div>
                        )
                }

            </div>
        );
    }

}

export default Blog;
