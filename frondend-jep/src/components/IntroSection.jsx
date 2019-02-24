import React, { Component } from 'react';

class IntroSection extends Component {
    render() {
        return (
        <section id="intro">
            <div className="intro-content">
              <h2>There is <span>no love sincerer</span><br />than the love of food</h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">Mulai Yuk</a>
                <a href="#portfolio" className="btn-projects scrollto">Portfolio Yuk </a>
              </div>
            </div>
            <div id="intro-carousel" className="owl-carousel">
              <div className="item" style={{backgroundImage: 'url("img/introSection/introSection1-1.jpg")'}} />
              <div className="item" style={{backgroundImage: 'url("img/intro-carousel/introSection2-2.jpg")'}} />
              <div className="item" style={{backgroundImage: 'url("img/intro-carousel/introSection3-3.jpg")'}} />
              <div className="item" style={{backgroundImage: 'url("img/intro-carousel/introSection4-4.jpg")'}} />
              <div className="item" style={{backgroundImage: 'url("img/intro-carousel/introSection5-5.jpg")'}} />
            </div>
        </section>
        )
    }
}

export default IntroSection;