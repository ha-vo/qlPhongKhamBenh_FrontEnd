import React, { Component } from 'react';
import userServices from '../../services/userServices';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            text: 'none'
        }
    }



    async componentDidMount() {
        let user = await userServices.getAllUsers();
        if (user.errno == 0) {
            this.setState(
                {
                    user: user.data,
                    text: 'have'
                }
            )
        }
    }

    check = () => {
        this.state.user.map(user => { console.log(user) })
    }


    render() {
        let allUser = this.state.user
        return (
            <div className='container'>
                <div className='all-users mt-5'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {allUser && allUser.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td><button className='edit'><i className="fa fa-wrench" aria-hidden="true"></i></button>
                                            <button className='delete'><i className="fa fa-trash" aria-hidden="true"></i></button></td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
