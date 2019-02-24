import React, { Component } from 'react';

class TeamSection extends Component {
    render() {
        return (
        <section id="team" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Team</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/teamSection/team1.jpg" alt="teamKA" title="Siti Nurjannah" /></div>
                    <div className="details">
                      <h4>Siti Nurjannah</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href="https://www.facebook.com/nrjnnh97/"><i className="fa fa-facebook" /></a>
                        <a href="https://www.instagram.com/nur_journey/?hl=en"><i className="fa fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/teamSection/team2.jpg" alt="teamKA" title="Ivana Deborah" /></div>
                    <div className="details">
                      <h4>Ivana Deborah</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href="https://www.facebook.com/idwuwung"><i className="fa fa-facebook" /></a>
                        <a href="https://www.instagram.com/ivanadeborah/?hl=en"><i className="fa fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/teamSection/team4.jpg" alt="teamKA" title="Justify Esther" /></div>
                    <div className="details">
                      <h4>Justify Esther</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href="https://www.facebook.com/justfy.pasaribu"><i className="fa fa-facebook" /></a>
                        <a href="https://www.instagram.com/justifyesther/"><i className="fa fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/teamSection/team3.jpg" alt="teamKA" title="Theresia Jesa" /></div>
                    <div className="details">
                      <h4>Theresia Jesa</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href="https://www.facebook.com/theresia.setijadi"><i className="fa fa-facebook" /></a>
                        <a href="https://www.instagram.com/theresiajesa/"><i className="fa fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default TeamSection;