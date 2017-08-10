import React, { Component } from "react";
import './index.less'


class SearchInput extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  render() {
    return (
          <input
            type='text'
            className='search-input'
            placeholder='请输入关键字'
            value = {this.state.value}
            onChange={this.changeHandle.bind(this)}
            onKeyUp={this.keyuphandle.bind(this)}
          />
    )
  }
  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }
  changeHandle(e) {
    this.setState({
      value: e.target.value
    })
  }
  keyuphandle(e) {
    if (e.keyCode != 13){
      return
    }
    this.props.enterHandle(this.state.value)
  }
}




export default  SearchInput
