import { useGoalSelector } from "../../store/hooks.ts";
import ShowGoalRedux from "./ShowGoalRedux.tsx";

export default function GoalListRedux() {
  const goals = useGoalSelector(state => state.goals.items);
  return <>
    <ul>{
        goals.map(goal => <li key={goal.id}>
            <ShowGoalRedux {...goal}/>
        </li>)
    }</ul>
    <h2 id="number">Quantity {goals.length}</h2>
  </>
}
