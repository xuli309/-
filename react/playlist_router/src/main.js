import React, { Component } from 'react'
import Item from './item';

export default class Main extends Component {
   
    
    render() {
        let data = this.props.data;
        return (
            <table className="main" style={{ display: data.length ? "table" : "none" }}>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" id="checkAll"
                                checked={this.props.isCheckAll}
                                onChange={(e) => {
                                    this.props.checkAll(e.target.checked)
                                }} />

                            <label htmlFor="checkAll">全选</label>
                        </th>
                        <th>歌曲</th>
                        <th>歌手</th>
                        <th>收藏</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => {
                        return (
                            <Item key={value.id} data={value} index={value.id} setCheck={this.props.setCheck} setLike={this.props.setLike} remove={this.props.remove} ></Item>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
