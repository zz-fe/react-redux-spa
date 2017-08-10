import React,{ Component} from 'react';
import RouterMap from '../routes';
import { connect } from 'react-redux';
import localStorage from '../util/local'
import {CITYNAME} from '../config/localStoreKey'
// 绑定actionCreator 组成的对象
import { bindActionCreators } from 'redux';
// 获取所有actionCreator  组成的对象
import * as Actions from '../actions/userInfo'
class App extends Component{
  constructor(){
    super()
    this.state = {
      done: false
    }
  }
  render(){
    return(
      <div>
      {this.state.done?<RouterMap/>:<div>正在加载</div>}
      </div>
    )
  }
  componentDidMount(){
    // 先去本地查找  是否存储过localStorge 名字中cityName
    this.setState({
        done:true
    })
    console.log(this.props,'初始化')
    let cityName = localStorage.getItem(CITYNAME);
       if (cityName == null) {
           cityName = '大连'
       }
        //页面加载后 首先获取当前本地是否存储了城市，如果存储了 使用存储的城市
        //如果没有设置默认城市 北京
        //将大连存入到redux中
        this.props.actions.update(cityName);
        localStorage.setItem(CITYNAME,cityName)

  }
}

export default connect(
  // mapStateToProps
  state => {
    return {}
  },
  // mapDispatchToProps
  dispath => {
    return {
      actions:bindActionCreators(Actions,dispath)
    }
  }
)(App)
