import React, { Component } from 'react';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import TestimoniSection from './TestimoniSection';
import ActionSection from './ActionSection';
import TeamSection from './TeamSection';
import KontakSection from './KontakSection';
class HomePage extends Component {
    render() {
        return (
            <div>
                <IntroSection />
                <AboutSection />
                <ServicesSection />
                <PortfolioSection />
                <TestimoniSection />
                <ActionSection />
                <TeamSection />
                <KontakSection />
            </div>
        )
    }
}

export default HomePage;