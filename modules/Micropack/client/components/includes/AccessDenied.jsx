/**
 * An Access Denied component
 */
//AccessDenied = React.createClass({
export default class AccessDenied extends React.Component {
    render () {
        return (
            <div>
                <div className="access-denied page jumbotron">
                    <h2>Access Denied</h2>

                    <p>You can't get here! Please log in.</p>
                </div>
            </div>
        )
    }
};