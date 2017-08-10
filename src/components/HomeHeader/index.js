import React,{ Component} from 'react';
import './index.less';
import {Link } from 'react-router-dom'; //Link用来跳转路由的
import SearchInput from '../SearchInput';



export default class HomeHeader extends Component{
  render(){
    return(
        <div className='home-header back'>
         <Link to="/city">
          <div className='city'>
          {this.props.cityName}
             <i className='iconfont icon-xiangxia2'></i>
          </div>
          </Link>
          <div className='search'>
             <i className='iconfont icon-sousuo-xianxing'></i>
             <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
          </div>
          <div className='profile'>
             <i className='iconfont icon-yonghufill'></i>
          </div>
        </div>
    )
  }

  enterHandle(value){
      this.props.search(value)
  }
}
