
const { Link } = ReactRouter;

Layout = React.createClass({
  render() {
    const path = this.props.location.pathname;

    return (
      <div id="container">
        <RouteTransition location={this.props.location}
                         component="main"
                         className="route-views">
          <div key={path} className="route-view">{this.props.children}</div>
        </RouteTransition>

        <AsideLeft />
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
