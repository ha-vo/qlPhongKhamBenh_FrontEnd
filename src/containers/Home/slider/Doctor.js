import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeSlider.scss'
import { formattedMessage } from 'react-intl';
import Slider from "react-slick";



class Doctor extends Component {
    render() {
        let settings = this.props.settings
        return (
            <div className='slider-contain br'>
                <div className='slider-content'>
                    <div className='slider-header'>
                        <div className='title-slider'>
                            Bác Sĩ Nổi Bật Tuần Qua
                        </div>
                        <div className='more'>
                            <button >Tìm Kiếm</button>
                        </div>

                    </div>
                    <Slider {...settings}>
                        <div className='doctor'>
                            <div className='doctor-img'></div>
                            <div className='name'>SUMMER</div>
                            <div className='description'>Chuyên Khoa Thần Kinh</div>
                        </div>
                        <div className='doctor'>
                            <div className='doctor-img'></div>
                            <div className='doctor-des'>mô tả 2</div>
                        </div>
                        <div className='doctor'>
                            <div className='doctor-img'></div>
                            <div className='doctor-des'>mô tả 3</div>
                        </div>
                        <div className='doctor'>
                            <div className='doctor-img'></div>
                            <div className='doctor-des'>mô tả 4</div>
                        </div>
                        <div className='doctor'>
                            <div className='doctor-img'></div>
                            <div className='doctor-des'>mô tả 5</div>
                        </div >
                        <div className='doctor'>
                            <div className='doctor-img'></div>
                            <div className='doctor-des'>mô tả 6</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
