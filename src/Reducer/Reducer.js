import { ADD_ITEM , DELETE_ITEM } from "../Actions/ActionTypes";


const initialState = {
    numOfItem : 0
}

 export const FirstReducer = (state=initialState , action) => {
    switch(action.type){
        case ADD_ITEM :
            return {
                ...state,
                numOfItem : state.numOfItem + 1
            };

         case DELETE_ITEM :
            return {
                ...state,
                numOfItem : state.numOfItem - 1
            };
          
         default :
            return state   
    }
}


