import React,{ Component} from 'react';
import './index.less';
import ReactSwipe from 'react-swipe'
export default class Slider extends Component{
  constructor(){
    super();
    this.state={
      index:0
    }
  }
  render(){
    let opts = {
      continuous: false,
      auto:3000,
      callback:(index)=>{
      this.setState({
        index
      })
    }}
    return(
      <div>
          <ReactSwipe className="carousel" swipeOptions={opts}>
            <div>
               <ul>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
               </ul>
            </div>
            <div>
                <ul>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>你好</span>
                   </li>
               </ul>
               </div>
               <div>
                 <ul>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
                   <li>
                       <i className='iconfont icon-coupons'></i>
                       <span>美食</span>
                   </li>
               </ul>
              </div>
          </ReactSwipe>
          <ul className='dots'>
             <li className={this.state.index==0?"active":""}></li>
             <li className={this.state.index==1?"active":""}></li>
             <li className={this.state.index==2?"active":""}></li>
          </ul>
      </div>
    )
  }
}
