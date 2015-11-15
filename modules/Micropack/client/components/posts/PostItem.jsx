import { Component } from 'react';
import { Link } from 'react-router'

/**
 * This component render a post item.
 * Props
 *      title           String      Post's Title
 *      url             String      Post's Url
 *      author          String      Post's author
 *      commentCount    Number      Number of comments in the post
 */
export default class PostItem extends Component{
    //We check the props
    static propTypes =  {
        post: React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
            author: React.PropTypes.string.isRequired,
            commentsCount: React.PropTypes.number.isRequired
        })

    }
    // This function get a url and return the domain
    getDomain (url) {
        let domain = url;
        //find & remove protocol (http, ftp, etc.) and get domain
        if (url.indexOf("://") > -1) {
            domain = url.split('/')[2];
        }
        else {
            domain = url.split('/')[0];
        }

        //find & remove port number
        domain = domain.split(':')[0];

        return domain;
    }
    render () {
        let owner= false;
        //We check if the user exists. If exists then we check if he is the owner of the post
        if (Meteor.userId()) {
            const user = Meteor.user()
            owner = this.props.post.authorId === user._id;
        }
        let editUrl = `${ this.props.post._id }/edit`;
        return (
            <div className="post">
                <div className="post-content">
                    <h3><a href={this.props.post.url} className="post-title">{this.props.post.title}</a><span>{this.getDomain(this.props.post.url)}</span>
                    </h3>
                    <p>
                        submitted by {this.props.post.author},
                        <a href=""> {this.props.post.commentsCount} comments</a>
                        {owner && <a href={editUrl}> Edit </a>}
                    </p>
                </div>
                <Link
                    to={`/posts/${ this.props.post._id }`}
                    className="discuss btn btn-default"
                    >
                    Discuss
                </Link>
            </div>
        );
    }
}