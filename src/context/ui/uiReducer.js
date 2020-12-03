import { types } from '../../types'


export const uiReducer = (state , actions ) => {
    const {type, payload }= actions
    switch (type) {
        case types.setError:
            return {
                ...state,
                error: payload
            }
       
        default:
            return state
    }
}