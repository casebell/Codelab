if (typeof Post === 'undefined') Post = {};

/**
 * Post.collection
 *    _id           PK
 *    title         title
 *    content       content
 *      type        ['text', 'html', 'markdown']
 *      version
 *      data
 *    author        author
 *      _id
 *      name
 *      url         photo image URL
 *    createdAt     date format
 *    updatedAt     date format
 */
Post.collection = new Mongo.Collection('posts');

Meteor.methods({
  postInsert(object) {
    check(object, Match.Where(matchPostInsert));

    // check permission
    if (! this.userId) throw Meteor.Error('error_access_denied');

    const now = new Date();
    const author = Meteor.user();
    const post = {
      title: object.title,
      content: object.content,
      author: {
        _id: author._id,
        name: userDisplayName(author),
        url: userPictureURL(author)
      },
      createdAt: now,
      updatedAt: now
    };

    const postId = Post.collection.insert(post);

    return postId;
  },

  postUpdate(postId, object) {
    check(postId, String);
    check(object, Match.Where(matchPostUpdate));

    // check permission
    if (! this.userId) throw new Meteor.Error(ERROR_SECURITY, 'error_access_denied');

    const author = Meteor.user();
    const post = {
      title: object.title,
      content: object.content,
      author: {
        _id: author._id,
        name: userDisplayName(author),
        url: userPictureURL(author)
      },
      updatedAt: new Date()
    };

    const result = Post.collection.update({ _id: postId, 'author._id': this.userId },
      { $set: post });

    if (result < 1) {
      throw new Meteor.Error(ERROR_SECURITY, 'error_access_denied');
    }

    return result;
  },

  postRemove(postId) {
    check(userId, String);

    // check permission
    if (! this.userId) throw new Meteor.Error(ERROR_SECURITY, 'error_access_denied');

    const result = Post.collection.remove({ _id: postId, 'author._id': this.userId });

    if (result < 1) {
      throw new Meteor.Error(ERROR_SECURITY, 'error_access_denied');
    }

    return result;
  }
});
