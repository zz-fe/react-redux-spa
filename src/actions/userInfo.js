import * as Types from '../action-types/userInfo'
import axios from 'axios'

/*
    以下所有以  save开始的方法  是指在发送请求的action之后异步得到数据后  的方法
*/
//更新城市
export function update(cityName) {
  return {
    type:Types.UPDATE_CITY,
    cityName:cityName
  }
}

//获取 超值特惠 信息
export function getAd() {
//发送异步 action
    return dispatch => {
      axios.get('/api/ad')
        .then((res) => {
            dispatch(saveHomeAd(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
      }
}

//获取到超值特惠
export function saveHomeAd(data) {
    return {
        type: Types.GET_AD,
        homeAd: data
    }
}

//获取你喜欢的列表 信息
export function getList(cityName,page) {
    return dispatch => {
      dispatch(setsaveList(true))
      axios.get('/api/list/'+ cityName + '/' + page)
        .then((res) => {
            dispatch(saveList(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
      }
}

//获取你喜欢的列表
export function saveList(object) {
    return {
        type: Types.SAVE_LIKELIST,
        list: object.data,
        isLoading: false
    }
}

//获取猜你喜欢中  加载的状态
export function setsaveList(flag) {
    return {
        type: Types.SET_SAVE_LIKELIST,
        isLoading: flag
    }
}
