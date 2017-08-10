import React,{ Component} from 'react';
import HomeHeader from '../../components/HomeHeader';
import Slider from '../../components/Slider';
import Ad from './subpage/Ad';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import List from './subpage/List';
import { getAd,getList} from '../../actions/userInfo'
import LoadMore from '../../components/LoadMore'

class Home extends Component{
  render(){
    console.log(this.props,'props');
    return(
      <div>
         <HomeHeader cityName={this.props.userInfo.cityName} search={this.search.bind(this)}/>
         <Slider />
         {
            this.props.userInfo.homeAd
            ? <Ad homeAd={this.props.userInfo.homeAd}/>
            : <div>加载中</div>
         }
         <List likeList={this.props.userInfo.likeList}/>
         <LoadMore isLoadingFn={this.isLoadingFn.bind(this)} isLoadingMore={this.props.userInfo.isLoading}></LoadMore>
      </div>
    )
  }
  componentDidMount() {
   this.props.getAd()
   this.props.getList(this.props.userInfo.cityName,this.props.userInfo.page)
  }
  search(keyword) {
    this.props.history.push('/search/' + encodeURIComponent(keyword))
  }
  isLoadingFn() {
    this.props.getList(this.props.userInfo.cityName,this.props.userInfo.page)
  }

}



function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch,ownProps) {
    return {
        getAd: () => {
            //发送请求的Action
            dispatch(getAd())
        },
        getList: (city,page) =>{
            dispatch(getList(city, page))
        }
    }
}

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Home
