import * as Types from '../action-types/userInfo'
import axios from 'axios'


// 获取你喜欢列表中的详情页面的信息

export function getlovelist(id) {
   return  dispatch => {
     axios.get('/api/detail/info/'+ id)
       .then(res => {
         dispatch(savelovelist(res.data))
       })
   }

}

// 保存你喜欢列表中的详情页面的信息
export function savelovelist(object) {
    return {
      type:Types.SET_LOVE_ID,
      lovelist:object
    }
}
