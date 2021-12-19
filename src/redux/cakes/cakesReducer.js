import {initialCakeState} from './initialCakeData'
import {BUY_CAKE} from './cakesType'

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numberOfCakes:state.numberOfCakes-1
        }
        default: return state
    }
}

export default cakeReducer