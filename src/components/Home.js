import React, { Component } from 'react';

class Home extends Component {
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }
    render() {
        return (
            <div>
                <h2>Page Home</h2>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Home;