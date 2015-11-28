if (typeof Posts === 'undefined') Posts = {};

Posts.List = React.createClass({
  postList() {
    return this.props.posts.map((post) => {
      return <PostItem key={post._id} {...post} />;
    });
  },

  render() {
    return (
      <main id="content">
        <App.Header />

        <article className="page">
          <div className="post-list">
            {this.postList()}
          </div>
        </article>
      </main>
    )
  }
});

const PostItem = React.createClass({
  render() {
    return (
      <div className="post-item">
        <p>{this.props.title}</p>
      </div>
    )
  }
});
