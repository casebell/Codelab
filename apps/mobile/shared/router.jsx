
const { Router, Route, IndexRoute } = ReactRouter;

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;

  const router = (
    <Router history={createHistory()}>
      <Route path="/" component={Layout} >
        <Route path="home" component={Home} />
        <Route path="about" component={About} />

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
