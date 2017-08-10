import React, { Component } from "react";
import localStorage from '../../util/local'
import Header from '../../components/Header'
import CityMore from '../../components/CityMore'
import {CITYNAME} from '../../config/localStoreKey'
import {update} from '../../actions/userInfo.js'
import {connect} from 'react-redux'
import * as actions from '../../actions/userInfo'
class City extends Component {
  render() {
     return (
       <div>
          <Header title='请选择城市'/>
          <div style={{textAlign:"center",height:"40px"}}>{this.props.userInfo.cityName}</div>
          <CityMore chooseCity={this.chooseCity.bind(this)}/>
       </div>
     )
  }
  componentDidMount() {
    const city  =  localStorage.getItem(CITYNAME)
    if(city == null) {
        return
    }
  }
  //选择城市
  chooseCity(city){
    this.props.update(city);
    this.props.history.push('/')
    localStorage.setItem(CITYNAME, city)
  }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch,ownProps) {
    return {
        update: (city) => {
            //发送请求的Action
            dispatch(update(city))
        }
    }
}

City = connect(
    mapStateToProps,
    mapDispatchToProps
)(City)

export default City
