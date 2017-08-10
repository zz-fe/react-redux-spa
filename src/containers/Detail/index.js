import React, { Component } from "react";
import {connect} from 'react-redux'
import {getlovelist} from '../../actions/detailinfo.js'
import Header from '../../components/Header'
import DetailInfo from '../../components/DetailInfo'


class Detail extends Component {
  render() {
    return (
      <div>
          <Header title='你喜欢的列表页'/>
          <DetailInfo data={this.props.detailinfo ? this.props.detailinfo : ''}></DetailInfo>
      </div>
    )
   }
   componentDidMount() {
     const match = this.props.match
     this.props.getlovelist(match.params.id)
   }
}


function mapStateToProps(state) {
   return {
     detailinfo : state.detailinfo.lovelist
   }
}

function mapDispatchToProps(dispatch,ownProps) {
   return {
     getlovelist : (id) => {
        dispatch(getlovelist(id))
     }
   }
}


Detail = connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)


export default Detail
