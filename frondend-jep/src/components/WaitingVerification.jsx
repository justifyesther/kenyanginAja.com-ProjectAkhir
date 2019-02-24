import React, { Component } from 'react';

class WaitVerification extends Component {
    render(){
        return(
            <div id="hero" className="wow fadeIn">
                <div className="hero-container">
                    <div>
                        <center>
                        <h1>Thank you for created an account in our website</h1>
                        <h3>If you do not receive any verification email</h3>
                        <p>Please check your email for account verification link!</p>
                        </center>
                    </div>
                    <center>
                    <img src="img/gambarVerified.png" alt="Gambar Verified" width="450px" />
                    </center>
                </div>
            </div>
        )
    }
}

export default WaitVerification;