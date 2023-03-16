import {combineReducers} from "redux"
import movieReducer from "./movieReducer"
import movieByIdReducer from "./movieByIdReducer"

export default combineReducers({movie:movieReducer ,
movieById: movieByIdReducer
})

//index.js라고 하면 자동으로 인식한다고 했던 듯.