import { Route, IndexRoute } from 'react-router';

import MainLayout from './components/MainLayout';
import PostListContainer from './components/posts/PostListContainer';
import PostPage from './components/posts/PostPage'
import PostSubmit from './components/posts/PostSubmit'

export default (
    <Route path="/" component={MainLayout}>
        <IndexRoute component={PostListContainer} />
        <Route path="/posts/:postId" component = {PostPage}/>
        <Route path="/submit" component = {PostSubmit}/>
    </Route>

);