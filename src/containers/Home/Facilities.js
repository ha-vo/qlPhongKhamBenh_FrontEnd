import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeSlider.scss'
import { formattedMessage } from 'react-intl';
import Slider from "react-slick";



class Facilities extends Component {
    render() {
        let settings = this.props.settings
        return (
            <div className='slider-contain'>
                <div className='slider-content'>
                    <div className='slider-header'>
                        <div className='title-slider'>
                            Cơ Sở Y Tế Nổi Bật
                        </div>
                        <div className='more'>
                            <button >XEM THÊM</button>
                        </div>

                    </div>
                    <Slider {...settings}>
                        <div className='facilities'>
                            <div className='facilities-img'></div>
                            <div className='facilities-des'>mô tả 1</div>
                        </div>
                        <div className='facilities'>
                            <div className='facilities-img'></div>
                            <div className='facilities-des'>mô tả 2</div>
                        </div>
                        <div className='facilities'>
                            <div className='facilities-img'></div>
                            <div className='facilities-des'>mô tả 3</div>
                        </div>
                        <div className='facilities'>
                            <div className='facilities-img'></div>
                            <div className='facilities-des'>mô tả 4</div>
                        </div>
                        <div className='facilities'>
                            <div className='facilities-img'></div>
                            <div className='facilities-des'>mô tả 5</div>
                        </div >
                        <div className='facilities'>
                            <div className='facilities-img'></div>
                            <div className='facilities-des'>mô tả 6</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Facilities);
