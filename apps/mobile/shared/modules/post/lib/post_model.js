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
