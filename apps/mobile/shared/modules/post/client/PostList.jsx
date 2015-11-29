
const { Link } = ReactRouter;

Post.List = React.createClass({
  postList() {
    return this.props.posts.map((post) => {
      return <PostListItem key={post._id} {...post} />;
    });
  },

  handleNewPost(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Post.NewContainer />, { className: 'slide-up' })
      .then((value) => {
        console.log('value = ' + value);
      });
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    return (
      <App.Page className="footer-on">
        <App.Header />

        <article className="page">
          <div className="post-list">
            {this.postList()}
          </div>
        </article>

        <App.Footer>
          <button className="btn btn-primary btn-block"
                  onClick={this.handleNewPost}>{L('label_new_post')}</button>
        </App.Footer>
      </App.Page>
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
