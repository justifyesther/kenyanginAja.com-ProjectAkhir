import React, { Component } from 'react';

class BarPage extends Component {
    render() {
        return (
        <section id="topbar" className="d-none d-lg-block">
            <div className="container clearfix">
                <div className="contact-info float-left">
                    <i className="fa fa-envelope-o" /> <a href="mailto:kenyanginaja2019.com">kenyanginaja2019.com</a>
                    <i className="fa fa-phone" /> +62 812-9383-0126
                </div>
            <div className="social-links float-right">
                <a href="https://twitter.com/" className="twitter"><i className="fa fa-twitter" /></a>
                <a href="https://www.facebook.com/" className="facebook"><i className="fa fa-facebook" /></a>
                <a href="https://www.instagram.com/" className="instagram"><i className="fa fa-instagram" /></a>
                <a href="https://www.linkedin.com/" className="linkedin"><i className="fa fa-linkedin" /></a>
            </div>
            </div>
        </section>
        )
    }
}

export default BarPage;