import React,{ Component} from 'react';

import './index.less'
export default class Ad extends Component{
  render(){
    return(
        <div className='ad'>
            <h3>超值特惠</h3>
            {this.props.homeAd?this.props.homeAd.map((item,index)=>(
              <a href={item.link} key={index}>
               <img src={item.img} title={item.title}/>
              </a>
            ))
              :<div>正在加载</div>
            }
        </div>
    )
  }
}
