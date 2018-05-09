import React, {Component} from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import Helmet from 'react-helmet';
import Input from '../components/Input';
import Nav from '../components/Nav';
import { router } from '../components/router';
import { setMessage } from '../actions/message';

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        {router(this.props.component)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
  location: state.location,
  component: state.component,
})

const mapDispatchToProps = {
  setMessage,
}

export default connect(state => state)(App)
