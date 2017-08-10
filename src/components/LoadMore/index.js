import React,{ Component} from 'react';


export default class LoadMore extends Component{
  render() {
    return(
      <div ref='wrapper'>
           {
            this.props.isLoadingMore
            ? <span>加载中...</span>
            : <span onClick={this.LoadMoreHandle.bind(this)}>加载更多</span>
           }
      </div>
    )
  }
 LoadMoreHandle() {
    //执行传递过来的函数
    this.props.isLoadingFn()
 }
 componentDidMount() {
   const wrapper = this.refs.wrapper
   let timeoutId
   const callback = () => {
     const top = wrapper.getBoundingClientRect().top
     const winH =  window.screen.height

     if(top && top < winH) {
       this.props.isLoadingFn()
     }
   }
   window.addEventListener('scroll' ,()=>{
     if (this.props.isLoadingMore) {
        return
     }
     if (timeoutId){
        clearTimeout(timeoutId)
     }
     timeoutId = setTimeout(callback, 50)
   })
 }

}
