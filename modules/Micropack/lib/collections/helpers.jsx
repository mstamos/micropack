export const validatePost = function (post) {
    var errors = {};

    if (!post.title)
        errors.title = "Please fill in a headline";

    if (!post.url)
        errors.url =  "Please fill in a URL";

    return errors;
}