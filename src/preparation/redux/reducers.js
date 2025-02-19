import  {ADD_NOTE,REMOVE_NOTE,EDIT_NOTE}  from "./actions";

const initialState={

    notes:[]
};
const Reducers=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_NOTE':
            return {
                ...state,
                notes :[...state.notes,action.payload]
            };
        case 'REMOVE_NOTE':
            return {
                ...state,
                notes :state.notes.filter((note, index) => index !== action.payload)
            };    
        case 'EDIT_NOTE':
            return {
                ...state,
                notes : state.notes.map((note, index) => index === action.payload.index ? action.payload: note)
                    };
        default:
                return state;
                    }};
 export default Reducers;
        