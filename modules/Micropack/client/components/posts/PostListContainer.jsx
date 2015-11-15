import { Component } from 'react';
import ReactMixin from 'react-mixin';
import Posts from 'Micropack/lib/collections/Posts'
import PostList from './PostList'
import Loading from 'Micropack/client/components/includes/Loading'

@ReactMixin.decorate(ReactMeteorData)
export default class PostListContainer extends Component {
    getMeteorData () {
        Meteor.subscribe("posts")
        return {
            //postsReady: sub.ready(),
            allPosts: Posts.find().fetch()

        }
    }
    render () {
        let renderedComponent = <Loading />
        if (this.data.allPosts) {
            renderedComponent = <PostList allPosts={this.data.allPosts} />
        }
        return (
            renderedComponent
        )

    }
}