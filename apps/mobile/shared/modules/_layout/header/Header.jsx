
Header = React.createClass({
  getDefaultProps() {
    return {
      title: 'Page-Title'
    }
  },

  render() {
    return (
      <header>
        <div className="logo">{this.props.title}</div>
        <div className="header-left">
          <NavButton />
        </div>
      </header>
    )
  }
});