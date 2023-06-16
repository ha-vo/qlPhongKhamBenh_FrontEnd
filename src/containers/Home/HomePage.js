import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import Specialist from './slider/Specialist';
import Facilities from './slider/Facilities';
import Doctor from './slider/Doctor';
import HandBook from './slider/HandBook';
import Introduction from './Introduction'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <>
                <HomeHeader />
                <HomeBanner />
                <Specialist settings={settings} />
                <Facilities settings={settings} />
                <Doctor settings={settings} />
                <HandBook settings={settings} />
                <Introduction settings={settings} />
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
