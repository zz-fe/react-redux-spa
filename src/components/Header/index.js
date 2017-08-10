import React, { Component } from "react";
import './index.less'

class Header extends Component {
  render() {
    return (
      <div className='city-header'>
        <div className='c-header'>
           <i className='iconfont icon-fanhui' onClick={this.cityClick.bind(this)}></i>
           <span className='c-city'>{this.props.title}</span>
        </div>
      </div>
    )
   }
   cityClick (){
       window.history.back();
   }
 }
export default Header
