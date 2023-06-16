import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeSlider.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";



class Specialist extends Component {
    render() {
        let settings = this.props.settings
        return (
            <div className='slider-contain br'>
                <div className='slider-content'>
                    <div className='slider-header'>
                        <div className='title-slider'>
                            Chuyên Khoa Phổ Biến
                        </div>
                        <div className='more'>
                            <button >XEM THÊM</button>
                        </div>

                    </div>
                    <Slider {...settings}>
                        <div className='specialist'>
                            <div className='specialist-img'></div>
                            <div className='specialist-des'>mô tả 1</div>
                        </div>
                        <div className='specialist'>
                            <div className='specialist-img'></div>
                            <div className='specialist-des'>mô tả 2</div>
                        </div>
                        <div className='specialist'>
                            <div className='specialist-img'></div>
                            <div className='specialist-des'>mô tả 3</div>
                        </div>
                        <div className='specialist'>
                            <div className='specialist-img'></div>
                            <div className='specialist-des'>mô tả 4</div>
                        </div>
                        <div className='specialist'>
                            <div className='specialist-img'></div>
                            <div className='specialist-des'>mô tả 5</div>
                        </div >
                        <div className='specialist'>
                            <div className='specialist-img'></div>
                            <div className='specialist-des'>mô tả 6</div>

                        </div>
                    </Slider>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialist);
