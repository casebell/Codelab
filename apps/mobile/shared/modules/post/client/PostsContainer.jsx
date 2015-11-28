
Posts.ListContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('postsList');

    return {
      loading: ! handle.ready(),
      posts: Posts.collection.find({}, { sort: { createdAt: -1 }}).fetch(),
    }
  },

  render() {
    return (
      <Posts.List {...this.data} />
    )
  }
});
