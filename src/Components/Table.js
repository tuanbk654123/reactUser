import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Table extends Component {

    mappingDataUser = () => 
        this.props.dataUserProps.map((value,key) =>(
            <TableDataRow name = {value.name} tell = {value.tell} permistion = {value.permistion} stt = {key} key ={key}  />
        ) )
    
    mappingDataUse2 = () => {
        <TableDataRow/>
    }

    render() {
        console.log(this.props.dataUserProps)
        return (
         
                <div className="col">
                    <table className="table table-striped table-hover">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Điện Thoại</th>
                                <th>Quyền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.mappingDataUser()}
                            
                        </tbody>
                    </table>
                </div>
            
        );
    }
}

export default Table;