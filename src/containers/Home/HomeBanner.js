import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss'
import { FormattedMessage } from 'react-intl';

class HomeBanner extends Component {

    render() {
        return (
            <div className='home-banner-container'>
                <div className='contain-first'>
                    <div className='text1'><FormattedMessage id="homeBanner.title1" /></div>
                    <div className='text2'><FormattedMessage id="homeBanner.title2" /></div>
                    <div className='search'>
                        <i className="fa fa-search" ></i>
                        <input />
                    </div>
                </div>
                <div className='contain-second'>
                    <div className='option'>
                        <div className='icon'>
                            <i className="fa fa-hospital" ></i>
                        </div>
                        <div className='text'>
                            <FormattedMessage id="homeBanner.option1" />
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i class="fa fa-mobile" aria-hidden="true"></i>
                        </div>
                        <div className='text'>
                            <FormattedMessage id="homeBanner.option2" />
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i class="fa fa-book" aria-hidden="true"></i>
                        </div>
                        <div className='text'>
                            <FormattedMessage id="homeBanner.option3" />
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i className="fa fa-flask" aria-hidden="true"></i>
                        </div>
                        <div className='text'>
                            <FormattedMessage id="homeBanner.option4" />
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i className="fa fa-user-md" aria-hidden="true"></i>
                        </div>
                        <div className='text'>
                            <FormattedMessage id="homeBanner.option5" />
                        </div>
                    </div>

                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);
