import { useGoalsContext } from "../../store/goals-store";
import ShowGoal from "./ShowGoal.tsx";

export default function GoalList() {
  const {goals, quantity} = useGoalsContext();
  return <>
    <ul>{
        goals.map(goal => <li key={goal.id}>
            <ShowGoal {...goal}/>
        </li>)
    }</ul>
    <h2 id="number">Quantity {quantity}</h2>
  </>
}
