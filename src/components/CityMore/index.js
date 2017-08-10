import React, { Component } from "react";
import './index.less'
class CityMore extends Component {
  render() {
    const data = ['北京','上海','广州','沈阳','大石桥','营口','三亚','厦门','台湾']
    return (
      <div className='city-more'>
          <ul className='city-all'>
           {
             data.map((item,index) => {
                return <li key={index} onClick={this.choose.bind(this,item)}>{item}</li>
             })
           }
          </ul>
      </div>
    )
   }
   choose(city) {
     this.props.chooseCity(city)
   }
  }
export default CityMore
