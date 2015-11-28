
App.Layout = React.createClass({

  render() {
    const path = this.props.location.pathname;
    const notificationsContainer = Meteor.isClient ?
      <Overlay.NotificationsContainer /> : null;

    return (
      <div id="container">
        <RouteTransition location={this.props.location}
                         component="main"
                         className="route-views">
          <div key={path} className="route-view">{this.props.children}</div>
        </RouteTransition>

        <App.AsideLeft />
        {notificationsContainer}
      </div>
    )
  }
});
