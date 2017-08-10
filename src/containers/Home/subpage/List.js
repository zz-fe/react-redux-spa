import React,{Component} from 'react';
import LoveList from '../../../components/LoveList'

export default class List extends Component{

  render() {
    return(
      <div>
         <h3>猜你喜欢</h3>
         {
           this.props.likeList.length
           ?  <LoveList data={this.props.likeList}/>
           :  <div>加载中.....</div>
         }

      </div>
    )
  }
  // 获取数据
  componentDidMount() {

  }

}
