
const { Router, Route, IndexRoute } = ReactRouter;

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;

  const router = (
    <Router history={createHistory()} onUpdate={App.AsideLeft.hide} >
      <Route path="/" component={App.Layout} >
        <Route path="home" component={Home} />
        <Route path="about" component={About} />

        <Route path="posts" component={Posts.ListContainer} />

        <IndexRoute component={Home}/>
      </Route>
    </Router>
  );

  Meteor.startup(function() {
    ReactDOM.render(router, document.getElementById('app-container'));
  });

} else {
  // server-side routes
  /*
   const routes = (
     <Route path="/" component={Layout}>
       <Route path="home" component={Home}/>

       <IndexRoute component={Home}/>
     </Route>
   );

   ReactRouterSSR.Run(routes);
   */
}
