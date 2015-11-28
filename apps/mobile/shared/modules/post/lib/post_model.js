if (typeof Posts === 'undefined') Posts = {};

/**
 * Posts
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
Posts.collection = new Mongo.Collection('posts');
