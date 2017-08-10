import * as Types from '../action-types/userInfo'

const initialState = {
    page: 0,
    likeList: []
}

export function userInfo(state = initialState ,action) {
    switch (action.type){
      case Types.UPDATE_CITY:
       return {
          ...state,
          cityName:action.cityName
       };
      case Types.GET_AD:
       return {
          ...state,
          homeAd:action.homeAd
       };
       case Types.SAVE_LIKELIST:
        return {
           ...state,
           page:state.page + 1,
           likeList:state.likeList.concat(action.list),
           isLoading:action.isLoading
        };
        case Types.SET_SAVE_LIKELIST:
         return {
            ...state,
            isLoading:action.isLoading
         };
       default:
        return state

    }

}
