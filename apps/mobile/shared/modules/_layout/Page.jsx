
App.Page = React.createClass({
  getDefaultProps() {
    return {
      className: ''
    }
  },

  render() {
    return (
      <main id="content" className={this.props.className}>
        {this.props.children}
      </main>
    )
  }
});
