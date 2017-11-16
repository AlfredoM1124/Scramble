import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form action="#!" method="POST">
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="password"></input>
                <button type="reset">Reset</button>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;