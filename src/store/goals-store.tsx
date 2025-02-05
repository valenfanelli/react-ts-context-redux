import { createContext, ReactNode, useContext, useReducer } from "react";

export type Goal = {
    description: string;
    date: string;
    id: number;
};
type Goals = {
    goals: Goal[];
    quantity: number
};
const initialState: Goals = {
    goals: [],
    quantity: 0
}
type GoalsContextValue = Goals & {
    addGoal: (newGoal: Goal) => void,
    removeGoal: (id: number) => void
};
const GoalsContext = createContext<GoalsContextValue | null>(null);
type AddGoalAction = {
    type: 'ADD',
    payload: Goal
};
type RemoveGoalAction = {
    type: 'REMOVE',
    payload: number
};
type GoalsContextProviderProps = {
    children: ReactNode
};
type Action = AddGoalAction | RemoveGoalAction;

function goalsReducer(state: Goals, action: Action){
    if(action.type === 'ADD'){
        return {
            ...state,
            goals: [...state.goals, action.payload],
            quantity: state.quantity + 1
        };
    }
    if(action.type === 'REMOVE'){
        return {
            ...state,
            goals: state.goals.filter(goal => goal.id !== action.payload),
            quantity: state.quantity - 1
        }
    }
    return state;
}
export default function GoalsContextProvider ({children}: GoalsContextProviderProps){
    const [goalsState, dispatch] = useReducer(goalsReducer, initialState);
    const ctx: GoalsContextValue = {
        goals: goalsState.goals,
        quantity: goalsState.quantity,
        addGoal(newGoal){
            dispatch({type: 'ADD', payload: newGoal});
        },
        removeGoal(id){
            dispatch({type: 'REMOVE', payload: id});
        }
    }
    return <GoalsContext.Provider value={ctx}>{children}</GoalsContext.Provider>
}

export function useGoalsContext(){
    const goalsCtx = useContext(GoalsContext);
    if(goalsCtx === null){
        throw new Error("Error - global context doesn't exist")
    }
    return goalsCtx;
}