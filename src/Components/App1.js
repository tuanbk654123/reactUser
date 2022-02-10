import React, { Component } from 'react';
import Add from './Add';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import DataUser from './data.json'
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiHienThiForm: true,
            dataUserProps : DataUser,
            searchText:''
        }
    }

    thongBao = () => {
        this.setState({
            trangThaiHienThiForm: !this.state.trangThaiHienThiForm
        }

        );
    }
    getNewUerData = (item) => {
        var items=this.state.dataUserProps;
        items.push(item);
        this.setState({
            dataUserProps: items
        });
        //console.log( this.state.dataUserProps  )
    }
    checkConnectProps = (dl) =>{
        this.setState({
            searchText: dl
        });
        console.log("dl : "+ dl);
    }
    render() {
        var ketqua = [];
        console.log("dl render : "+ this.state.searchText);
        this.state.dataUserProps.forEach((item)=>{
            if(item.name.indexOf(this.state.searchText) !== -1){
                ketqua.push(item);
               
            }
        })
       
        return (
            <div>
                <Header></Header>
                <div className='searchForm'>
                    <div className='container'>
                        <div className='row'>
                            <Search 
                            checkConnectProps ={(dl) => this.checkConnectProps(dl)}
                            ketNoi ={() => this.thongBao()} hienThiForm = {this.state.trangThaiHienThiForm} ></Search>
                            <div className="col-12">
                                <hr/>
                            </div>
                            <Table dataUserProps = {ketqua} />
                            <Add hienThiForm={this.state.trangThaiHienThiForm} addItem = {(item)=> this.getNewUerData(item)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App1;