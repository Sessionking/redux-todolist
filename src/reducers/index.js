import {combineReducers} from 'redux'
import todoLists from './todoLists'
import visibleFilter from './visibleFilter'

export default combineReducers({todoLists, visibleFilter})
