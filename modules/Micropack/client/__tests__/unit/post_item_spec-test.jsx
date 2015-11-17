import React from 'react'
import ReactDOM from 'react-dom'
import { renderComponent } from "TestHelpers/client/render"
import PostItem from "Micropack/client/components/posts/PostItem"
import TestUtils from 'react-addons-test-utils';

describe("PostItem",  () => {
    let defProps, renderWithProps, el, $el;

    beforeEach(function() {
        defProps = {
            _id: "XYZ",
            title: "Meteor Point",
            url: "http://www.meteorpoint.com",
            author: "Miltos",
            commentsCount: 5
        }
        renderWithProps = function(props) {
            const component = TestUtils.renderIntoDocument(
                <PostItem
                    post={props}
                    />
            )
            el = ReactDOM.findDOMNode(component);
            $el = $(el);
        };
    });

    it("should get the domain from the url", function () {
        expect(PostItem.prototype.getDomain("http://www.meteor.com")).toBe("www.meteor.com")
    });

    it("should print out post's title", function () {
        // We render the component
        renderWithProps(defProps);
        // We expect post's title to render
        // We use the jQuery to get the text from post-title class
        expect($el.children().find(".post-title").text()).toEqual("Meteor Point");
    });

    it("should display Edit button when user is the author", function () {
        // We create fake object to pass for Meteor.user() function
        var user = {
            username: "Miltos"
        }
        spyOn(Meteor, "user").and.returnValue(user);
        spyOn(Meteor, "userId").and.returnValue(true);
        // We render the object and we wait at jQuery object $el on text function
        // to find the Edit word
        renderWithProps(defProps);
        expect($el.text()).toContain("Edit");

    });
});