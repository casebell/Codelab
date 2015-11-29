
Post.View = React.createClass({
  contentHTML(content) {
    if (! content) return null;

    let value = "";
    switch (content.type) {
      case 'text':
        value = `<p>${content.data && content.data.replace(/\r?\n/g, '<br />')}</p>`;
        break;

      case 'html':
        value = content.data;
        break;

      case 'markdown':
        value = content.data;
        break;
    }

    return value;
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    const post = this.props.post;
    const content = this.contentHTML(post.content);
    const createdAt = moment(post.createdAt).format('YYYY-MM-DD');
    return (
      <main id="content">
        <App.Header />

        <article className="page">
          <section className="post-view">
            <div className="info">
              {createdAt}
            </div>

            <h3 className="title">{post.title}</h3>

            <div className="content"
                 dangerouslySetInnerHTML={{__html: content}} />
          </section>


        </article>
      </main>
    )
  }
});

