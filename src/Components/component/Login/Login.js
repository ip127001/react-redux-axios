import React, {Component} from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class Login extends Component {
    state = {
        userId: null,
        password: null
    }

    nameChangeHandler = (event) => {
        event.preventDefault();
        this.setState({userId: event.target.value});
    }

    passwordChangeHandler = (event) => {
        event.preventDefault();
        this.setState({password: event.target.value});
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.updateAuthValue(this.state.userId, this.state.password);
    }

    render() {
        let redirect = null;
        if(this.props.auth) {
            redirect = <Redirect to="/open-league" />
        }

        return (
            <div>
                {redirect}
                <div className="container">
                <h3>Login Form</h3>
                    <form onSubmit={e => this.formSubmitHandler(e)}>
                        <label htmlFor="fname">User ID</label>
                        <input 
                            type="text" 
                            className="fname" 
                            name="userId" 
                            placeholder="Your id.." 
                            onChange={e => this.nameChangeHandler(e)} />

                        <label htmlFor="lname">Password</label>
                        <input type="text" 
                            className="lname" 
                            name="password" 
                            placeholder="Your password.." 
                            onChange={e => this.passwordChangeHandler(e)} />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.userId,
        key: state.password,
        auth: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAuthValue: (id, pass) => dispatch({type: 'AUTH', ID: id, PASS: pass})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);