import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_ERROR } from "../actions/actionTypes";

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
        console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
            
        case LOGIN_SUCCESS:
        console.log('login success')
            return {
                ...state,
                authError: null
            }
        
        case SIGNOUT_SUCCESS:
        console.log('sign out success ')
        return state

        case SIGNOUT_SUCCESS:
        console.log('sign up was a success')
        return {
            ...state, 
            authError: null
        }

        case SIGNUP_ERROR:
        console.log('sign up error')
        return {
            ...state,
            authError: action.err.message
        }
        default:
            return state
    }

}

export default authReducer