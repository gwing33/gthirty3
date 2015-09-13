import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
// import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
// import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { createTransitionHook } from 'helpers/universalRouter';

const title = 'Gerald Leenerts [ III ]';
const description = 'Gerald\'s thoughts and activities';
const image = '/assets/logo.svg';

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:site_name': title,
      'og:image': image,
      'og:locale': 'en_US',
      'og:title': title,
      'og:description': description,
      'twitter:card': 'summary',
      'twitter:site': '@GThirty3',
      'twitter:creator': '@GThirty3',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:image:width': '200',
      'twitter:image:height': '200'
    }
  }
};

// @connect()
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    // user: PropTypes.object,
    // logout: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    const {router, store} = this.context;
    this.transitionHook = createTransitionHook(store);
    router.addTransitionHook(this.transitionHook);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.context.router.transitionTo('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.context.router.transitionTo('/');
    }
  }

  componentWillUnmount() {
    const {router} = this.context;
    router.removeTransitionHook(this.transitionHook);
  }

  static fetchData(store) {
    const promises = [];
    // if (!isInfoLoaded(store.getState())) {
    //   promises.push(store.dispatch(loadInfo()));
    // }
    // if (!isAuthLoaded(store.getState())) {
    //   promises.push(store.dispatch(loadAuth()));
    // }
    return Promise.all(promises);
  }

  handleLogout(event) {
    event.preventDefault();
    // this.props.logout();
  }

  render() {
    const {user} = this.props;
    return (
      <div>
        <DocumentMeta {...meta}/>
        <nav>
          <div>
            <Link to="/">
              gThirty3
            </Link>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
