
const { Router, Route, IndexRoute } = ReactRouter;

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;

  const router = (
    <Router history={createHistory()} onUpdate={App.AsideLeft.hide} >
      <Route path="/" component={App.Layout} >

        <Route path="sign-in" component={Accounts.ui.SignInContainer} />
        <Route path="sign-up" component={Accounts.ui.SignUpContainer} />
        <Route path="forgot-password"
               component={Accounts.ui.ForgotPasswordContainer} />
        <Route path="reset-password/:token"
               component={Accounts.ui.ResetPasswordContainer} />

        <Route path="home" component={Home} />
        <Route path="about" component={About} />

        <Route path="posts" component={Post.ListContainer} />
        <Route path="post/:_id" component={Post.ViewContainer} />
        <Route path="post/edit/:id" component={Post.EditContainer} />
        <Route path="post/new" component={Post.NewContainer} />

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
