
const { Link } = ReactRouter;

Post.List = React.createClass({
  postList() {
    return this.props.posts.map((post) => {
      return <PostListItem key={post._id} {...post} />;
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

const PostListItem = React.createClass({
  render() {
    return (
      <div className="post-item">
        <Link to={`/post/${this.props._id}`}>{this.props.title}</Link>
      </div>
    )
  }
});
