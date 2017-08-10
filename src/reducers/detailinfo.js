import * as Types from '../action-types/userInfo'

const initialState = {}

export function detailinfo (state = initialState, action) {
   switch (action.type) {
     case Types.SET_LOVE_ID:
        return {
          ...state,
          lovelist:action.lovelist
        }
     default:
         return state
   }
}
