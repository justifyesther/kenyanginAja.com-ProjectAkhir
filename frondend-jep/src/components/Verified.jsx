import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { onUserVerified } from '../actions';
import { API_URL_KA } from '../API/apiURL';
import { AUTH_VERIFIED } from '../API/apiLINK';

class Verified extends Component {
    state = { verified: false, loading: true }

    componentDidMount() {
        var params = queryString.parse(this.props.location.search)
        var username = params.username;
        var password = params.password;

        axios.post(API_URL_KA + AUTH_VERIFIED, {
            username,
            password
        }).then((res) => {
            this.props.onUserVerified(res.data);
            this.setState({
                loading: false, 
                verified: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    renderContent = () =>{
        if(this.state.verified && !this.state.loading){
            return(
                <div>
                    <center>
                    <h3>Congrats you are verified!</h3>
                    <h3>Now you can use all the app features!</h3>
                    </center>
                </div>
            );
        }
        else if(!this.state.verified && !this.state.loading){
            return(
                <div>
                    <center>
                    <h3>Sorry error happened</h3>
                    <p>Please, try to reload this page!</p>
                    </center>
                </div>
            );
        }
        return (
            <center>
            <div>
                <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }} />
                <p>Please Wait...</p>
            </div>
            </center>
        )
    }
    render(){
        return(
            <div id="hero" className="wow fadeIn">
                <div className="hero-container">
                    <div>
                        {this.renderContent()}
                    </div>
                    <div>
                        <center>
                        <img src="img/gambarVerified.png" alt="Gambar Verified" width="450px" />
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {onUserVerified})(Verified);