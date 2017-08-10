import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers';
import thunk from 'redux-thunk';


export function configStore(initState){
  return createStore(
    reducers,
    initState,
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
}
// redux-tools  可以看当前reducers  所有的状态
