import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AllBlogs extends Component {
    state = {
        posts: [
            {
                id: 1,
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, numquam? Fuga, quas ullam ex pariatur, hic unde debitis corrupti minima ratione odit vitae incidunt ea sint sunt at numquam laudantium!'
            }
        ]
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
