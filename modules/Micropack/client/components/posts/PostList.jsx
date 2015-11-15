import { Component } from 'react';
import PostItem from './PostItem'

export default class PostList extends Component {
    render() {
        // Iterate through all posts and create a post item for each of them
        let posts = this.props.allPosts.map(function (post) {
            return <PostItem
                key={post._id}
                post={post}
                />
        });
        return (
            <div className="posts page">
                {posts}
            </div>
        )
    }
}