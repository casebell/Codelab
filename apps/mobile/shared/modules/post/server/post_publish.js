Meteor.publish('postsList', () => {
  return Posts.collection.find({}, { sort: { createdAt: -1 }});
});

Meteor.publish('postView', (postId) => {
  return Posts.collection.find({ _id: postId });
});

