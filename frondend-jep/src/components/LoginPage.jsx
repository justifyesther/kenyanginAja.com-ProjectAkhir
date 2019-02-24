import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { onUserLogin, onActivityLog} from '../actions';
import { API_URL_KA } from '../API/apiURL';
import { AUTH_LOGIN } from '../API/apiLINK';


const cookies = new Cookies();

class Login extends Component {

  state = { role: '' };

  componentWillReceiveProps(newProps) {
    if(newProps.username !== '') {
      cookies.set('usernameCookie', newProps.username, { path: '/' });
      cookies.set('roleCookie', newProps.role, { path: '/' });
    }
  }

  onBtnLoginClick = () => {
    var username = this.refs.username.value;
      var password = this.refs.password.value;
      this.props.onUserLogin({username, password})

      axios.post(API_URL_KA + AUTH_LOGIN, { 
        username, password
     })
      .then((res) => {
          this.props.onActivityLog({username: username, role: res.data[0].role, desc: 'Login'});
      })
      .catch((err) => {
          console.log(err);
      })
  }

  // renderError = () => {
  //   if (this.props.error.length > 0) {
  //       return <p className="alert alert-danger">{this.props.error}</p>
  //   }
  // }

  // renderButton = () => {
  //   if (this.props.loading) {
  //       return <div><i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }} /></div>
  //   }
  //   return (
  //     <div className="form-group">
  //         <input type="button" name="submit" id="submit" className="form-submit" defaultValue="Masuk Yuk" onClick ={this.onBtnLoginClick}/>
  //     </div>
  //   )
  // } 
  
  render(){
    if(this.props.username === "") {
      var alertLogin = this.props.errorLogin;
        if(alertLogin) {
          var alertLog = <p align='left' style={{ fontSize: '13px' }} 
                        className="alert alert-danger">
                        &nbsp;{this.props.errorLogin}</p>;
        }

        var load;
        if(this.props.loading) {
            load = <div><i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }} /></div>;

        } else {
            load = <div className="form-group">
                   <input type="button" 
                          name="submit" 
                          id="submit" 
                          className="form-submit" 
                          defaultValue="Masuk" onClick ={this.onBtnLoginClick}/>
                   </div>
        }
      return(
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure><img src="img/fotoSignIn.png" alt="sing up" width="350px"/></figure>
                <p className="signup-image-link">Don't have any account ?
                <div/>
                <a href="/register" className="signup-image-link">Create an account</a></p>
                
              </div>
              <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="username"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input type="text" name="username" id="username" ref="username" placeholder="Your Username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                    <input type="password" name="password" id="password" ref="password" placeholder="Your Password" />
                  </div>
                  {alertLog}
                  {load}
                </form>
              </div>
            </div>
          </div>
        </section>
      )
    }
    return <Redirect to="/" />
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.username, 
    role: state.auth.role,
    email: state.auth.email, 
    errorLogin: state.auth.errorLogin,
    loading: state.auth.loading
  };
}


export default connect(mapStateToProps,{onUserLogin, onActivityLog})(Login);