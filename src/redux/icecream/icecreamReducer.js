import { BUY_ICECREAM } from "./icecreamtype";
import { initialIceCreamData } from "./initialIcecreamData";

const icecreamReducer=(state=initialIceCreamData,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return {
            ...state,
            noOfIcecream:state.noOfIcecream-1
        }
        default: return state
    }
}

export default icecreamReducer;