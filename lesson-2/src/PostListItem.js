import React, { Component } from 'react'

export default class PostListItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {}
    }
    shouldComponentUpdate(nextProps) {
        return  this.props.id !== nextProps.id ||
                this.props.body !== nextProps.body ||
                this.props.title !== nextProps.title    
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <li>
                <h3>{title}</h3>
                <p>{body}</p>
            </li>
        )
    }
}
