import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <div className="UserInfo">
                    <img className="Avatar"
                        src={props.author.avatarUrl}
                        alt={props.author.name}
                    />
                    <div className="UserInfo-name">
                        {props.author.name}
                    </div>
                </div>
                <div className="Post-text">
                    {props.text}
                </div>
                <div className="Post-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }
}

export default Post;