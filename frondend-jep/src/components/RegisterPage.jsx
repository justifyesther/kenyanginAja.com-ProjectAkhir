import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { onUserRegister, onActivityLog} from '../actions';


class Register extends Component {

  componentWillReceiveProps(newProps) {
    this.props.onActivityLog({username: newProps.username, role: 'MEMBER', desc: 'Register'});
  }

  onBtnRegisterClick = () => {
    var username = this.refs.username.value;
        var fullname = this.refs.fullname.value;
        var email = this.refs.email.value;
        var phone = this.refs.phone.value;
        var password = this.refs.password.value;
            
        this.props.onUserRegister({username, fullname, email, phone, password});
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
  //         <input type="button" name="submit" id="submit" className="form-submit" defaultValue="Daftar Yuk" onClick ={this.onBtnRegisterClick}/>
  //     </div>
  //   )
  // } 

  render() {
      if(this.props.username === ''){ 
        var load;
            if(this.props.loading) {
                load = <div><i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }} /></div>;
            } else {
                load =  <div className="form-group">
                        <input type="button" 
                        name="submit" 
                        id="submit" 
                        className="form-submit" 
                        defaultValue="Daftar" 
                        onClick ={this.onBtnRegisterClick}/>
                        </div>
            }

            var alertRegister = this.props.errorRegister;

            if(alertRegister) {
                var alertReg = <p align='left' style={{ fontSize: '13px' }} 
                                    className="alert alert-danger">
                                    &nbsp;{this.props.errorRegister}</p>;
              }
        return (
          <section className="signup">
            <div className="container">
              <div className="signup-content">
                <div className="signup-form">
                  <h3 className="form-title">Sign Up</h3>
                  <form method="POST" className="register-form" id="register-form">
                    <div className="form-group">
                      <label htmlFor="username"><i className="zmdi zmdi-account material-icons-name" /></label>
                      <input type="text" name="username" id="username" ref="username" placeholder="Your Username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                      <input type="email" name="email" id="email" ref="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone"><i className="zmdi zmdi-phone" /></label>
                      <input type="text" name="phone" id="phone" ref="phone" placeholder="Your Phone Number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                      <input type="password" name="pass" id="pass" ref="password" placeholder="Your Password" />
                    </div>
                      <div className="form-group">
                        {alertReg}
                        {load}
                      </div>
                    </form>
                  </div>
                  <div className="signup-image">
                    <figure><img src="img/fotoSignUp.png" alt="register" width="300px"/></figure>
                    <p className="signup-image-link">Don't have any account ?
                    <div/>
                    <a href="/login" className="signup-image-link">I am already member</a></p>
                  </div>
                </div>
              </div>
            </section>
        );
      }
      return <Redirect to="/waitingverification" />
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.auth.status,
    loading: state.auth.loading, 
    errorRegister: state.auth.errorRegister 
  };
}

export default connect(mapStateToProps, { onUserRegister, onActivityLog }) (Register);