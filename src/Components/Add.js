import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthaiChinhSua: true,
            id: 0,
            name: "",
            tell: "",
            permistion: "",
            item: {}
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        // ddongs gois item
        var item = {};
        item.name = this.state.name;
        item.tell = this.state.tell;
        item.permistion = this.state.permistion;
        this.setState({
            item: item
        });
    }
    thayDoiTrangThai = () => {
        this.setState({
            trangthaiChinhSua: !this.state.trangthaiChinhSua
        });
    }


    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card mt-2">
                            <img className="card-img-top " src="holder.js/100x180/" alt="" />

                            <div className="card-body">
                                <h4 className="card-title">Thêm mới</h4>
                                <div className="form-group">
                                    <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Tên" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="tell" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Điện thoại" />
                                </div>

                                <div className="form-group" >

                                    <select className="custom-select" name="permistion" onChange={(event) => this.isChange(event)}   >
                                        <option value={1}>admin</option>
                                        <option value={2}>normal</option>
                                        <option value={3}>admin so</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary  btn-block" onClick={() => this.props.addItem(this.state.item)}>Thêm moi</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        console.log(this.state)
        return (
            <div >

                {this.kiemTraTrangThai()}

            </div>
        );
    }
}

export default Add;