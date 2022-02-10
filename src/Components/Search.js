import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state =
            ({
                tempValue: ''
            })
    }

    // this.props.checkConnectProps
    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <button type="button" className="btn btn-danger  " onClick={() => this.props.ketNoi()}>Đóng</button>
        }
        else {
            return <button type="button" className="btn btn-primary " onClick={() => this.props.ketNoi()}>Thêm moi</button>
        }
    }
    isChange = (event) => {

        this.setState(
            {
                tempValue: event.target.value
            }
        );
        this.props.checkConnectProps(this.state.tempValue)
    }
    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="form-group ">
                        <div className="btn-group">
                            <input type="text" onChange={(event) => this.isChange(event)} placeholder="Tim kiem" style={{ width: '500px' }} />
                            <button className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm</button>
                            {this.hienThiNut()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;