import { Component } from 'react';
import ReactMixin from 'react-mixin';
import Posts from 'Micropack/lib/collections/Posts'
import PostList from './PostList'
import Loading from 'Micropack/client/components/includes/Loading'

@ReactMixin.decorate(ReactMeteorData)
export default class PostListContainer extends Component {
    getMeteorData () {
        Meteor.subscribe("posts")
        const selectors = {}
        const fields = {
            sort: {
                submitted: -1
            }
        }
        const allPosts = Posts.find(selectors, fields).fetch();
        return {
            allPosts

        }
    }
    render () {
        if (!this.data.allPosts) {
            return <Loading/>
        }
        return (
            <PostList allPosts={this.data.allPosts} />
        )
    }
}