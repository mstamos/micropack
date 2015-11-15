import Posts from 'Micropack/lib/collections/Posts';
import Comments from 'Micropack/lib/collections/Comments';

Meteor.publish("posts", function () {
    return Posts.find();
});
Meteor.publish("post", function (postId) {
    return Posts.find({_id:postId});
});
Meteor.publish('comments', function(postId) {
    check(postId, String);
    return Comments.find({postId: postId});
});