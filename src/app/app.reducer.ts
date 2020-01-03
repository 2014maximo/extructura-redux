import { Action } from "@ngrx/store";

export interface appState {
    texto: string
}

export const initialState = {
    texto : 'Codigo Mentor'
}

export function miReducer(state: appState = initialState, action: Action){
    console.log(action);
    
    switch(action.type){

        case 'SPANISH':
            return {
                ...state,
                texto: 'Hola mundo'
            }

        case 'ENGLISH':
            return {
                ...state,
                texto: 'Hello world'
            }
        default:
            return state;

    }
    //return state;
 
}