import React, { Component } from 'react';

class KontakSection extends Component {
    render() {
        return (
        <section id="contact" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Kontak</h2>
              </div>
              <div className="row contact-info">
                <div className="col-md-4">
                  <div className="contact-address">
                    <i className="fa fa-address-card-o" title="Alamat kenyanginAja.com" />
                    <h3>Alamat</h3>
                    <address>Jalan Anggrek Loka AF 55/56, Tangerang Selatan</address>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-phone">
                    <i className="fa fa-phone" title="Telepon kenyanginAja.com"/>
                    <h3>Nomor Telepon</h3>
                    <p><a href="tel:+6281293830126">+62 812-9383-0126</a></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-email">
                    <i className="fa fa-envelope" title="Email kenyanginAja.com" />
                    <h3>Email</h3>
                    <p><a href="mailto:info@example.com">kenyanginaja2019@gmail.com</a></p>
                  </div>
                </div>
                </div>
            </div>
        </section>
        )
    }
}

export default KontakSection;