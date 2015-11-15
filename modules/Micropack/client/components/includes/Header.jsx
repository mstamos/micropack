import { Component } from 'react';
import { Link } from 'react-router'
import ReactMixin from 'react-mixin';

// We get the user login system from blaze
const LoginButtons = BlazeToReact('loginButtons');

@ReactMixin.decorate(ReactMeteorData)
export default class Header extends Component {
    getMeteorData() {
        // This method knows how to listen to Meteor's reactive data sources,
        // Here we change userIsLoggedIn to prevent users to see on the header the Submit Post link
        return {
            userIsLoggedIn: Meteor.userId()
        }
    }

    render () {
        return (
            <div>
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navigation">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand app-title" href="/">Microscope</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navigation">
                            <ul className="nav navbar-nav">
                                {this.data.userIsLoggedIn &&
                                    <li>
                                        <Link
                                            to={`/submit`}
                                            className="submit-post-but">
                                        </Link>
                                    </li>
                                }
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <LoginButtons/>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
