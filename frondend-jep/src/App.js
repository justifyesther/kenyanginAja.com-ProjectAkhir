import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { keepLogin, cookieChecked } from './actions';
import WaitingVerification from './components/WaitingVerification';
import Verified from './components/Verified';
import BarPage from './components/BarPage';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import FooterPage from './components/FooterPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

const cookies = new Cookies();

class App extends Component {

  componentDidMount() {
    const newCookie = cookies.get('usernameCookie');
    if(newCookie) {
      this.props.keepLogin(newCookie);
    } else {
      this.props.cookieChecked();
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <BarPage />
        <HeaderPage />
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/verified" component={Verified} />
          <Route path="/waitingverification" component={WaitingVerification} />
        </div>
        <FooterPage />
      </div>
    ); 
  }
}



const mapStateToProps = (state) => {
  return {cookie: state.auth.cookie}
}

export default withRouter(connect(mapStateToProps,{keepLogin, cookieChecked})(App));
