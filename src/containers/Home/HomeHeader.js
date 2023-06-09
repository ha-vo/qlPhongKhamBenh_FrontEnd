import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss'

class HomeHeader extends Component {

    render() {
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <div className='bars-icon'>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className='logo'>
                            <i class="fa fa-heartbeat" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <div><b>Chuyên khoa</b></div>
                            <div>Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className='child-content'>
                            <div><b>Cơ sở y tế</b></div>
                            <div>Chọn bệnh viện phòng khám</div>
                        </div>
                        <div className='child-content'>
                            <div><b>Bác sĩ</b></div>
                            <div>Chọn bác sĩ giỏi</div>
                        </div>
                        <div className='child-content'>
                            <div><b>Gói khám</b></div>
                            <div>Khám sức khoẻ tổng quát</div>
                        </div>


                    </div>
                    <div className='right-content'>
                        <i class="fa fa-question-circle" aria-hidden="true"></i>
                        Help
                        <span className='language'>VN</span>
                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
