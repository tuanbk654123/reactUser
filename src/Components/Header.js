import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                   <div className="jumbotron jumbotron-fluid">
                    <div className="container tex-center">
                        <h1 className="display-3">Quản lý người dùng </h1>
                        <hr className="my-2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;