import { Component } from 'react';
import PostInput from "./PostInput"
import AccessDenied from "../includes/AccessDenied"
import ReactMixin from 'react-mixin';
import { History } from 'react-router'
import Posts from 'Micropack/lib/collections/Posts'
import {validatePost} from 'Micropack/lib/collections/helpers.jsx'

/**
 * This component renders a form of two input and a button to submit a post
 *
 */
@ReactMixin.decorate(ReactMeteorData)
export default class PostSubmit extends Component {
    getMeteorData () {
        return {
            userIsLogged: Meteor.userId()
        }
    }
    // We set 4 different variables 2 for each input
    // The one is for the message and the other for the css class
    state = {
            errorsTitle: "",
            errorsTitleClass: "",
            errorsUrl: "",
            errorsUrlClass: "",
            titleValue: "",
            urlValue: ""
    }
    formSubmission (event) {
        event.preventDefault();

        // We get the values from inputs
        var post = {
            url: event.target.url.value,
            title: event.target.title.value
        };
        // We check if all inputs have values
        var fieldsErrors = validatePost(post);
        // If we didn't fill any of the inputs then we return a message and an error class
        if (!_.isEmpty(fieldsErrors)) {
            if (fieldsErrors.title) {
                this.setState({
                    errorsTitle: fieldsErrors.title,
                    errorsTitleClass: "has-error"
                });
            } else {
                this.setState({
                    errorsTitle: "",
                    errorsTitleClass: ""
                });
            }
            if (fieldsErrors.url) {
                this.setState({
                    errorsUrl: fieldsErrors.url,
                    errorsUrlClass: "has-error"
                });
            } else {
                this.setState({
                    errorsUrl: "",
                    errorsUrlClass: ""
                });
            }
            return;
        }
        // We save history prop to use it inside callback
        const history = this.props.history
        Meteor.call('postInsert', post, (error, result) => {
            // display the error to the user and abort
            if (error)
                return throwError(error.reason);

            // show this result but route anyway
            if (result.postExists)
                throwError('This link has already been posted');

            // We push the new router state to into history
            // This functionality we lead us into new route
            const path = `/posts/${ result._id }`
            history.pushState(null,path);
        });
    }
    render () {
        if (this.data.userIsLogged) {
            return (
            /**
             * We change onSubmit
             * from
             *  onSubmit = {this.formSubmission}
             * to
             *  onSubmit = {(e) => this.formSubmission(e)}
             * for unit test events
             * More details on this stackoverflow post
             * http://stackoverflow.com/questions/26470679/test-a-form-with-jest-and-react-js-testutils
             */
                <form className="main form page" onSubmit={(e) => this.formSubmission(e)}>
                    <PostInput
                        title={"Title"}
                        placeholder={"Name your post"}
                        errorClassName={this.state.errorsTitleClass}
                        errorMessage={this.state.errorsTitle}
                        value={this.state.titleValue}
                        />
                    <PostInput
                        title={"URL"}
                        placeholder={"Your URL"}
                        errorClassName={this.state.errorsUrlClass}
                        errorMessage={this.state.errorsUrl}
                        value={this.state.urlValue}
                        />
                    <input type="submit" value="Submit" className="btn btn-primary sub-post-but"/>
                </form>
            );
        } else {
            return (
                <AccessDenied/>
            );
        }
    }
}

