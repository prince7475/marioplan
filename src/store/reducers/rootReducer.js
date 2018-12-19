import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    //firebase have a reducer build in but you what have to tell which collect you want to connect to on you fire base database
    firestore : firestoreReducer
})

export default rootReducer