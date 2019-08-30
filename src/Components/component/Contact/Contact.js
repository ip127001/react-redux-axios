import React, {Component} from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './Contact.css';


class Contact extends Component {
    formHandler = (e) => {
        e.preventDefault();
    }
    render() {
        let redirect = null;
        if(!this.props.auth) {
            redirect = <Redirect to="/" />
        }
        return (
            <div>
                {redirect}
                <div className="container">
                <h3>Contact Form</h3>
                    <form onSubmit={this.formHandler}>
                        <label for="fname">First Name</label>
                        <input type="text" className="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" className="lname" name="lastname" placeholder="Your last name.." />

                        <label for="country">Country</label>
                        <select className="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <label for="subject">Subject</label>
                        <textarea className="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.authenticated
    }
}

export default connect(mapStateToProps)(Contact);