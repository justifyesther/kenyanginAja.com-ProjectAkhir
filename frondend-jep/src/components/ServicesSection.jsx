import React, { Component } from 'react';

class ServicesSection extends Component {
    render() {
        return (
            <section id="services">
        <div className="container">
          <div className="section-header">
            <h2>Layanan</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="box wow fadeInLeft">
                <div className="icon"><i className="fa fa-cutlery" /></div>
                <h4 className="title"><a href>Pergi Kuliner</a></h4>
                <p className="description">Anda bingung mau makan dimana? Jangan khawatir sekarang kenyanginAja.com memiliki layanan Pergi Kuliner yang menyediakan direktori dan review makanan bagi para penggunannya.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box wow fadeInRight">
                <div className="icon"><i className="fa fa-truck" /></div>
                <h4 className="title"><a href>Klik Eat</a></h4>
                <p className="description">Anda mager masak atau beli makanan di luar sendirian? Tenang aja, sekarang kenyanginAja.com memiliki layanan Klik Eat yang akan mengantar pesanan makanan anda sampai pada tujuan.</p>
              </div>
            </div>
            <center>
            <div className="col-lg-6">
              <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                <div className="icon"><i className="fa fa-sticky-note-o" /></div>
                <h4 className="title"><a href>Masak Apa Yaa?</a></h4>
                <p className="description">Anda tidak tau mau masak apa hari ini? Yapppsss... sekarang kenyanginAja.com memiliki layanan Masak Apa Yaa? yang membagikan resep-resep terbaik kami bagi para penggunannya.</p>
              </div>
            </div>
            </center>
          </div>
        </div>
      </section>
        )
    }
}

export default ServicesSection;