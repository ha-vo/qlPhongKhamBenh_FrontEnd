import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import HomeSlider from './HomeSlider';

class HomePage extends Component {

    render() {
        return (
            <>
                <HomeHeader />
                <HomeBanner />
                <HomeSlider />
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
