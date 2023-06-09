import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss'

class HomeBanner extends Component {

    render() {
        return (
            <div className='home-banner-container'>
                <div className='contain-first'>
                    <div className='text1'>NỀN TẢNG Y TẾ</div>
                    <div className='text2'>CHĂM SÓC SỨC KHOẺ TOÀN DIỆN</div>
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
                            Khám chuyên khoa
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i class="fa fa-mobile" aria-hidden="true"></i>
                        </div>
                        <div className='text'>
                            Khám từ xa
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i class="fa fa-book" aria-hidden="true"></i>
                        </div>
                        <div className='text'>
                            Khám tổng quát
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i className="fa fa-hospital" ></i>
                        </div>
                        <div className='text'>
                            Xét nghiệm y học
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i className="fa fa-hospital" ></i>
                        </div>
                        <div className='text'>
                            Khám nha khoa
                        </div>
                    </div>
                    <div className='option'>
                        <div className='icon'>
                            <i className="fa fa-hospital" ></i>
                        </div>
                        <div className='text'>
                            Khám chuyên khoa
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
