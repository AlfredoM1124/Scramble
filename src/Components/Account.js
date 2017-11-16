import React, { Component } from 'react';

class Account extends Component {
    render() {
        return (
            <div className="Account">
                <div className="UserInfo">
                    <img className="Avatar"
                        src={props.author.avatarUrl}
                        alt={props.author.name}
                    />
                    <div className="UserInfo-name">
                        {props.author.name}
                    </div>
                </div>
                <div className="Categories">
                    {props.posts.categories}
                </div>
                <div className="Posts-num">
                    {props.posts.num}
                </div>
            </div>
        );
    }
}

export default Account;