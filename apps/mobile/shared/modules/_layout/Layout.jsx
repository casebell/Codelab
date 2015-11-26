
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

const AsideLeft = React.createClass({
  render() {
    return (
      <aside>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/about">About</Link></div>
      </aside>
    );
  }
});

const Header = React.createClass({
  render() {
    return (
      <header>
        <h3>Shine React Codelab</h3>
      </header>
    );
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
