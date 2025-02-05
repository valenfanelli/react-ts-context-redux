import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type GoalItem = {
    description: string;
    date: string;
    id: number;
};
type GoalState = {
    items: GoalItem[]
};
const initialState: GoalState = {
    items: []
}
export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        addGoal(state, action: PayloadAction<{description: string; date: string}>){
            const id = Math.random();
            state.items.push({...action.payload, id: id});
        },
        removeGoal(state, action: PayloadAction<number>){
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);
            state.items.splice(itemIndex, 1); //Remove the element in the position
        }
    }
});
export const {addGoal, removeGoal} = goalSlice.actions;