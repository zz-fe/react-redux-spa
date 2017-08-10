import React,{ Component} from 'react';
import './index.less';
import Item from './Item'
export default class LoveList extends Component{

  render() {
    const data = this.props.data

    return(
      <div>
      {
        data.map((item, index)=>{
           return  <Item key={index} data={item}></Item>
      })
      }
      </div>
    )
  }

}
