import React, { Component } from "react";
import SearchInput from '../../components/SearchInput'


class Search extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
          <div>{this.props.match.params.keyword }</div>
      </div>
    )
   }
  }







  export default Search
