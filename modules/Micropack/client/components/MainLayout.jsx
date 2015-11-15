import { Component, PropTypes } from 'react';
import Header from './includes/Header'

export default class MainLayout extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    }

    componentWillMount() {
        require('Micropack/client/css/Micropack.import.css');
    }

    render() {
        return (
            <div className="container">
                <div id="header-section">
                    <Header/>
                </div>
                <div id="main">
                    {this.props.children}
                </div>

            </div>
        );
    }
}