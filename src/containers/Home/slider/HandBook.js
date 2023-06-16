import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeSlider.scss'
import { formattedMessage } from 'react-intl';
import Slider from "react-slick";



class HandBook extends Component {
    render() {
        let settings = this.props.settings
        settings.slidesToShow = 2
        return (
            <div className='slider-contain'>
                <div className='slider-content'>
                    <div className='slider-header'>
                        <div className='title-slider'>
                            Cẩm Nang
                        </div>
                        <div className='more'>
                            <button >Xem tất cả</button>
                        </div>

                    </div>
                    <Slider {...settings}>

                        <div className='handBook'>
                            <div className='handBook-img'></div>
                            <div className='handBook-des'>5 Prestigious porcelain dental crown addresses in Ho Chi Minh City</div>
                        </div>
                        <div className='handBook'>
                            <div className='handBook-img'></div>
                            <div className='handBook-des'>mô tả 2</div>
                        </div>
                        <div className='handBook'>
                            <div className='handBook-img'></div>
                            <div className='handBook-des'>mô tả 3</div>
                        </div>
                        <div className='handBook'>
                            <div className='handBook-img'></div>
                            <div className='handBook-des'>mô tả 4</div>
                        </div>
                        <div className='handBook'>
                            <div className='handBook-img'></div>
                            <div className='handBook-des'>mô tả 5</div>
                        </div >
                        <div className='handBook'>
                            <div className='handBook-img'></div>
                            <div className='handBook-des'>mô tả 6</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
