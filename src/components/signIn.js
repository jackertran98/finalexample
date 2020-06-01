import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            pass: ''
        }
    }
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    onSubmit = () => {
        const { username, pass } = this.state;
        this.props.check(username, pass)
        if (username === '' || pass === '') {
            alert("Nhập username || pass")
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form">
                        <h2>Sign in</h2>
                        <input name="username" type="text" placeholder="Email" onChange={this.handleInputChange} /><br></br>
                        <input name="pass" type="password" placeholder="Password" onChange={this.handleInputChange} />
                        <button type="submit" className="btnSubmit btn btn-success" onClick={this.onSubmit}>Sign in</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;