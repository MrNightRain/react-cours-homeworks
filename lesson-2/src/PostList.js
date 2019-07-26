import React, { Component } from 'react'
import PostListItem from './PostListItem';

export default class PostList extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        const {isLoading, data} = this.props;
        if (isLoading) {
            return (
                <>
                Loading...
                </>
            )
        }
        return (
            <ul>
                {
                    data.map(res => (
                        <PostListItem
                            key={res.id}
                            title={res.title}
                            body={res.body}
                            id={res.id}
                        />
                    ))
                }
            </ul>
        )
    }
}
