import React, { Component } from 'react';

class AboutSection extends Component {
    render() {
        return (
        <section id="about" className="wow fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 about-img">
                        <img src="img/aboutSection/logoKenyanginAja.png" alt="logoAbout" width="11800px" margin-bottom="11500px"/>
            </div>
                <div className="col-lg-6 content">
                    <h2>Apa itu kenyanginAja.com?</h2>
                        <h3>kenyanginAja.com adalah website yang rilis di tahun 2019 yang khusus untuk wilayah Tangerang, dimana website ini dapat membantu para penggunannya.</h3>
                <div className="col-lg-6 content"></div>
                    <h2>Keuntungan dari kenyanginAja.com : </h2>
                <ul>
                    <li><i className="fa fa-check" /> Memberi informasi terbaik dan terpercaya bagi para food blogger dan foodies.</li>
                    <li><i className="fa fa-check" /> Mengantar makanan sampai pada tujuan dan tepat waktu.</li>
                    <li><i className="fa fa-check" /> Membagikan resep-resep makanan yang dapat dipraktekkan langsung di rumah.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
        )
    }
}

export default AboutSection;