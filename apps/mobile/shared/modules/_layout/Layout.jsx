
const { Link } = ReactRouter;

Layout = React.createClass({
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

        <AsideLeft />
        {notificationsContainer}
      </div>
    )
  }
});



const Footer = React.createClass({
  render() {
    return (
      <footer>
        &copy; 2015 Bookpal Co., Ltd. All rights reserved.
      </footer>
    );
  }
});
