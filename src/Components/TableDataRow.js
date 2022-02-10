import React, { Component } from 'react';

class TableDataRow extends Component {
    permisstionShow = () => {
        if( this.props.permistion === "1"){
            return "admin"
        }
        else if (this.props.permistion === 2){
            return "Moderator"
        }
        else return "norrmal"
    }
    render() {
        return (
       
                <tr>
                    <td >{this.props.stt +1}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.tell}</td>
                    <td>{
                       
                    this.permisstionShow()}</td>
                    <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua">
                                <i className="fas fa-edit " /> Sửa
                            </div>
                            <div className="btn btn-danger sua">
                                <i className="fas fa-trash " /> Xóa
                            </div>
                        </div>
                    </td>
                </tr>
                
            
        );
    }
}

export default TableDataRow;