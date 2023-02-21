export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const M_PLUS = "M_PLUS"
export const MEM_R = "MEM_R"
export const MEM_C = "MEM_C"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation)  => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const Mplus = () => {
    return({type:M_PLUS})
}

export const MemR = () => {
    return({type:MEM_R})
}

export const MemC = () => {
    return({type:MEM_C})
}