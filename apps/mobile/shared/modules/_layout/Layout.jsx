
const { Link } = ReactRouter;

Layout = React.createClass({
  render() {
    return (
      <div id="container">
        <main id="content">
          <Header />
          {this.props.children}
          <Footer />
        </main>

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
