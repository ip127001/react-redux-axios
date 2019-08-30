import React, {Component} from 'react';

import { Route, NavLink } from 'react-router-dom';

import './Main.css';

import Home from '../component/Home/Home';
import Contact from '../component/Contact/Contact';
import Login from '../component/Login/Login';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <header>
                    <nav>   
                        <ul>
                            <li><NavLink exact to="/">Login</NavLink></li>
                            <li><NavLink to="/open-league">Home</NavLink></li>
                            <li><NavLink to="/contact-form">Contact form</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={Login} />
                <Route path="/open-league" component={Home} />
                <Route path="/contact-form" component={Contact} />
            </div>
        )
    }
}

export default Main;