
Post.ViewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const _id = this.props.params._id;
    const handle = Meteor.subscribe('postView', _id);

    return {
      loading: ! handle.ready(),
      post: Post.collection.findOne(_id),
    }
  },

  render() {
    return (
      <Post.View {...this.data} />
    )
  }
});
