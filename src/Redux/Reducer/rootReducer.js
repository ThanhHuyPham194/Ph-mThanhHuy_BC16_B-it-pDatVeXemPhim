import {combineReducers, createStore} from 'redux';
import BaiTapDatVeReducer from './BaiTapDatVeReduce';


const rootReducer = combineReducers({
    BaiTapDatVeReducer,
})

export const store =  createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());