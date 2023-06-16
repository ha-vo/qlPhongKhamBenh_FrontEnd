import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss'
import { FormattedMessage } from 'react-intl';

class Introduction extends Component {

    render() {
        return (
            <div className="introduction-container">
                <div className="introduction-content">
                    <div className="introduction-title">Đặt Lịch Khám Bệnh Trực Tiến</div>
                    <div className="introduction-body">
                        <div className="video-intro">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ubIpPPoTapA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="introduction-description">
                            Trong video này, chúng ta sẽ cùng nhau hoàn thiện giao diện website, và cụ thể ở đây là hoàn thiện thêm Section Cơ sở y tế nổi bật, Bác sĩ nổi bật tuần qua và Cẩm nang.

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

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
