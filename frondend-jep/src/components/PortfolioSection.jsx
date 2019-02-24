import React, { Component } from 'react';

class PortfolioSection extends Component {
    render() {
        return (
            <section id="portfolio" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Portfolio</h2>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolioSection/portfolio1.JPG" className="portfolio-popup">
                      <img src="img/portfolioSection/portfolio1.JPG" alt="logoPortfolio" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Pergi Kuliner</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolioSection/portfolio2.jpg" className="portfolio-popup">
                      <img src="img/portfolioSection/portfolio2.jpg" alt="logoPortfolio" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Pergi Kuliner</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolioSection/portfolio3.JPG" className="portfolio-popup">
                      <img src="img/portfolioSection/portfolio3.JPG" alt="logoPortfolio" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Pergi Kuliner</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolioSection/portfolio4.png" className="portfolio-popup">
                      <img src="img/portfolioSection/portfolio4.png" alt="logoPortfolio" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Klik Eat</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolioSection/portfolio5.jpg" className="portfolio-popup">
                      <img src="img/portfolioSection/portfolio5.jpg" alt="logoPortfolio" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Klik Eat</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolioSection/portfolio6.png" className="portfolio-popup">
                      <img src="img/portfolioSection/portfolio6.png" alt="logoPortfolio" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Klik Eat</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolioSection/portfolio7.jpg" className="portfolio-popup">
                      <img src="img/portfolioSection/portfolio7.jpg" alt="logoPortfolio" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Masak Apa Yaa?</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolioSection/portfolio8.jpg" className="portfolio-popup">
                      <img src="img/portfolioSection/portfolio8.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Masak Apa Yaa?</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
        )
    }
}

export default PortfolioSection;