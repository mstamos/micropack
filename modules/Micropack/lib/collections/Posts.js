let Posts = new Mongo.Collection("posts");

// check that the userId specified owns the documents
const ownsDocument =   (userId, doc) => {
    return doc && doc.userId === userId;
}

Posts.allow({
    update (userId, post) { return ownsDocument(userId, post); },
    remove (userId, post) { return ownsDocument(userId, post); },
});



export default Posts


