import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;
export const useGoalDispatch: DispatchFunction = useDispatch;
export const useGoalSelector: TypedUseSelectorHook<RootState> = useSelector;