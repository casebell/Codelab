
App.Header = React.createClass({
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
          {RouteTransition.canGoBack() ? <App.BackButton />: <App.NavButton />}
        </div>
        <div className="header-right">
          {RouteTransition.canGoBack() ? <App.HomeButton />: null }
        </div>
      </header>
    )
  }
});