import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss'
import { FormattedMessage } from 'react-intl';
import { languages } from '../../utils/constant';
import { changeLanguage } from '../../store/actions/appActions';


class HomeHeader extends Component {

    changeLanguageFunc = (language) => {
        this.props.changeLanguageApp(language)
    }
    render() {
        let lang = this.props.language
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <div className='bars-icon'>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className='logo'>
                            <i class="fa fa-heartbeat" aria-hidden="true"></i>
                            <span className="bck">BCK</span>
                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeHeader.title1" /></b></div>
                            <div><FormattedMessage id="homeHeader.description1" /></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeHeader.title2" /></b></div>
                            <div><FormattedMessage id="homeHeader.description2" /></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeHeader.title3" /></b></div>
                            <div><FormattedMessage id="homeHeader.description3" /></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeHeader.title4" /></b></div>
                            <div><FormattedMessage id="homeHeader.description4" /></div>
                        </div>


                    </div>
                    <div className='right-content'>
                        <i class="fa fa-question-circle" aria-hidden="true"></i>
                        <FormattedMessage id="homeHeader.support" />
                        <div className={lang === languages.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguageFunc(languages.VI)}>VI</span></div>
                        <div className={lang === languages.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguageFunc(languages.EN)}>EN</span></div>

                    </div>
                </div>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageApp: (language) => dispatch(changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
