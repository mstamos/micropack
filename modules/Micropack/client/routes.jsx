import { Routes, Route, IndexRoute } from 'react-router';

import MainLayout from './components/MainLayout';
import PostListContainer from './components/posts/PostListContainer';
import PostPage from './components/posts/PostPage'
import PostSubmit from './components/posts/PostSubmit'
import NotFound from './components/application/NotFound'


export default (
    <Route path="/" component={MainLayout}>
        <IndexRoute component={PostListContainer}/>
        <Route path="/posts/:postId" component={PostPage}/>
        <Route path="/submit" component={PostSubmit}/>
        /**
        * https://github.com/rackt/react-router/blob/f8bb8d9ef119ca53c78c7ed9ecc3cc9fe77d492b/CHANGES.md
        * See changes for NotFoundRoute
        *
        */
        <Route path="*" component={NotFound}/>
    </Route>
);