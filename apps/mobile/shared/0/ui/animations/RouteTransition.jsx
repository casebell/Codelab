/**
 * implement route transition animation
 *
 * transition rule:
 *    1. clicking back button, set BACKWARD transition
 *    2. clicking home button, set DEFAULT  transition
 *    3. moving to an accounts-ui page, set DEFAULT transition
 *    4. if depth is increased, set FORWARD transition
 *    5. else set BACKWARD transition
 */
const { CSSTransitionGroup } = React.addons;

const Transition = {
  DEFAULT: 'fade',
  BACKWARD: 'slide-right',
  FORWARD: 'slide-left',
};

const Path = {
  ROOT: '/',
  HOME: '/home',
  DEFAULTS: ['/', '/home', '/sign-in', '/sign-up'],
};

const RouteStack = {
  _stack: [Path.ROOT],

  clear() {
    this._stack = [];
  },

  init(path = Path.ROOT) {
    this._stack = [Path.ROOT];
    if (path !== Path.ROOT && path != Path.HOME) this._stack.push(path);
  },

  push(path) {
    this._stack.push(path);
  },

  pop(depth = 1) {
    if (this.count() > depth) {
      let path;
      for (let i = 0; i < depth; i++) {
        path = this._stack.pop();
      }
      return path;
    }

    this.clear();
    return Path.ROOT;
  },

  replace(path) {
    this._stack.pop();
    this._stack.push(path);
  },

  count() {
    return this._stack.length;
  },

  top() {
    return this._stack.length ? this._stack[this._stack.length - 1] : null;
  }
};


RouteTransition = React.createClass({

  statics: {
    goHome: (history, transitionName = Transition.DEFAULT) => {
      RouteStack.clear();
      history.pushState({ transitionName }, Path.HOME);
    },

    goBack: (history, transitionName = Transition.BACKWARD) => {
      const path = RouteStack.pop(2);
      history.pushState({ transitionName }, path);
    },

    canGoBack: () => {
      return (RouteStack.count() > 1);
    },
  },

  getInitialState() {
    return {
      transitionName: Transition.DEFAULT,
      currentDepth: 1
    };
  },

  componentWillReceiveProps(props) {
    const { location } = props;
    const path = location.pathname;

    if (location.state && location.state.transitionName) {
      RouteStack.push(path);

      this.setState({
        transitionName: location.state.transitionName,
        currentDepth: RouteStack.count()
      });
    } else {
      if (path === Path.ROOT || path === Path.HOME) {
        RouteStack.init();
      } else {
        RouteStack.push(path);
      }

      const depth = RouteStack.count();
      let transitionName = Transition.DEFAULT;
      if (_.indexOf(Path.DEFAULTS, path) < 0) {
        transitionName = (depth > this.state.currentDepth) ?
          Transition.FORWARD : Transition.BACKWARD;
      }

      this.setState({ transitionName, currentDepth: depth });
    }
  },

  render() {
    const props = {
      transitionName: this.state.transitionName,
      transitionEnterTimeout: 300,
      transitionLeaveTimeout: 300,
      component: this.props.component,
      className: this.props.className
    };

    return (
      <CSSTransitionGroup {...props} >
        {this.props.children}
      </CSSTransitionGroup>
    )
  }
});
