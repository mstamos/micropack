import { Component } from 'react';
import ReactMixin from 'react-mixin';
import Posts from 'Micropack/lib/collections/Posts'
import Comments from 'Micropack/lib/collections/Comments'
import PostList from './PostList'
import Loading from 'Micropack/client/components/includes/Loading'
import CommentSubmit from 'Micropack/client/components/comments/CommentSubmit'
import CommentItem from 'Micropack/client/components/comments/CommentItem'
import PostItem from './PostItem'

/**
 * This component renders the post page.
 * Render
 *          PostItem
 *          CommentItem         A list of comments
 *          CommentSubmit       A component to submit new comment
 * Props
 *          _id     String  Post's id
 */

@ReactMixin.decorate(ReactMeteorData)
export default class PostPage extends Component {
    //startMeteorSubscriptions() {
    //    const subs = {
    //        post: Meteor.subscribe("post", this.props.params.postId),
    //        comments: Meteor.subscribe("comments", this.props.params.postId)
    //    }
    //    return subs
    //}

    getMeteorData() {
        //const subs = this.startMeteorSubscriptions()
        const post = Meteor.subscribe("post", this.props.params.postId)
        Meteor.subscribe("comments", this.props.params.postId)
        post.ready()
        return {
            //postReady: subs.post.ready(),
            //commentsReady: subs.comments.ready(),
            postData: Posts.findOne(),
            comments: Comments.find({postId: this.props.params.postId}).fetch(),
            userIsLogged: Meteor.userId()
        }
    }

    submitComment(commentText) {
        let comment = {
            body: commentText,
            postId: this.props._id
        };
        let errors = {};
        if (!comment.body) {
            errors.body = "Please write some content";
            return Session.set('commentSubmitErrors', errors);
        }
        Meteor.call('commentInsert', comment, function (error, commentId) {
            if (error) {
                throwError(error.reason);
            }
        });
    }

    render() {
        let post = this.data.postData;
        let renderedComments = this.data.comments.map((comment) => {
            console.log(comment);
            return <CommentItem
                key={comment._id}
                comment={comment}
                />
        });
        if (post) {
            return (
                <div className="post-page page">
                    <PostItem
                        key={post._id}
                        post={post}
                        />
                    <ul className="comments">
                        {renderedComments}
                    </ul>
                    {this.data.userIsLogged ?
                        <CommentSubmit
                            onCommentSubmit={this.submitComment}/> :
                        <p id="login-leave-comment">Please log in to leave a comment.</p>
                    }
                </div>
            );
        } else {
            return (
                <Loading/>
            )
        }

    }
}