import { Component } from 'react';

/**
 * This component render a comment
 * Props
 *      author          String      Comment's author
 *      submittedText   Date        Comment's submitted date
 *      body            String      Comment's body text
 */
export default class CommentItem extends Component {
    //We check the props
    static propTypes = {
        comment: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            submitted: React.PropTypes.instanceOf(Date),
            body: React.PropTypes.string.isRequired,
        })
    }
    render () {
        return (
            <div>
                <li>
                    <h4>
                        <span className="author">{this.props.comment.author}</span>
                        <span className="date"> on {this.props.comment.submitted.toString()}</span>
                    </h4>
                    <p>{this.props.comment.body}</p>
                </li>
            </div>
        )
    }
}