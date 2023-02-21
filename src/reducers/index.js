import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEM_R, M_PLUS, MEM_C } from './../actions';

export const initialState = {
    total: 0,
    operation: "",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
        case("÷"):
            return num1 / num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_DISPLAY) :
            return ({
               ...state,
               total: state.total === 0 
            })
            
        case(M_PLUS) :
            return ({
                ...state,
                memory: state.total
            })

        case(MEM_R) :
            return ({
                ...state,
                total: state.memory
            })
        
        case(MEM_C) :
            return ({
                ...state,
                memory: state.memory === 0
            })

        default:
            return state;
    }
}

export default reducer;