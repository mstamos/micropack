//import { Component } from 'react'
//
///**
// * An Not Found component
// */
//export default class NotFound extends Component {
//    render () {
//        return (
//            <div>
//                <div className="not-found page jumbotron">
//                    <h2>404</h2>
//
//                    <p>Sorry, we couldn't find a page at this address.</p>
//                </div>
//            </div>
//        )
//    }
//}


/**
 * An Not Found component
 */
const NotFound = React.createClass({
    render () {
        return (
            <div>
                <div className="not-found page jumbotron">
                    <h2>404</h2>

                    <p>Sorry, we couldn't find a page at this address.</p>
                </div>
            </div>
        )
    }
});

module.exports = NotFound