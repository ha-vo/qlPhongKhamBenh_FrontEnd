import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
// import { KeyCodeUtils, LanguageUtils } from "../utils";

// import userIcon from '../../src/assets/images/user.svg';
// import passIcon from '../../src/assets/images/pass.svg';
import './Login.scss';
// import { FormattedMessage } from 'react-intl';

// import adminService from '../services/adminService';
// import { Container } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();

        this.state = {
            username: '',
            password: '',
            isDisplayPasswords: false
        }

        this.handleOnChangeUsername = (e) => {
            this.setState({ username: e.target.value })
        }

        this.handleOnChangePassword = (e) => {
            this.setState({ password: e.target.value })
        }

        this.handleDisplayPassword = (e) => {
            this.setState({ isDisplayPasswords: !this.state.isDisplayPasswords })
        }
    }
    render() {
        return (
            <>
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 text-center login-title'>Login</div>
                            <div className='col-12 form-group login'>
                                <label><b>Username:</b></label>
                                <input
                                    className='form-control'
                                    placeholder='Enter your username'
                                    name="username"
                                    value={this.state.username}
                                    onChange={(e) => this.handleOnChangeUsername(e)}
                                />
                            </div>
                            <div className='col-12 form-group login'>
                                <label><b>Password:</b></label>
                                <div className='custom-password'>
                                    <input
                                        type={this.state.isDisplayPasswords ? 'text' : 'password'}
                                        className='form-control'
                                        placeholder='Enter your password'
                                        name="password"
                                        value={this.state.password}
                                        onChange={(e) => this.handleOnChangePassword(e)}
                                    />
                                    <span onClick={(e) => this.handleDisplayPassword(e)} className='display-password'>
                                        <i class={this.state.isDisplayPasswords ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                    </span>
                                </div>
                            </div>
                            <div className='col-12 text-center mt-4 btn'>
                                <button className='btn-login'>Login</button>
                            </div>
                            <div className='col-12 mt-3 '>
                                <span>Forgot your password?</span>
                            </div>
                            <div className='col-12 mt-3 text-center'><span>Or login with</span></div>
                            <div className='text-center login-icons'>
                                <i class="fab fa-facebook-f login-icon icon-facebook"></i>
                                <i class="fab fa-google-plus-g login-icon icon-google"></i>
                            </div>
                            <div className="col-12 mt-3 text-center"><span>Haven't account? Sign Up</span></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
