
const navs = [
  { path: '/home', name: 'Home' },
  { path: '/posts', name: 'Posts' },
  { path: '/about', name: 'About' },
];

const { Link } = ReactRouter;

App.AsideNavs = React.createClass({
  navList() {
    return navs.map((item) => {
      return (
        <Link key={item.path} to={item.path}>{item.name}</Link>
      )
    });
  },

  render() {
    return (
      <div id="nav-main">
        <nav className="links">
          {this.navList()}
        </nav>
      </div>
    )
  }
});