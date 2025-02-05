import { removeGoal, GoalItem } from "../../store/goal-slice";
import { useGoalDispatch } from "../../store/hooks";
import Button from "../UI/Button";

export default function ShowGoalRedux({description, date, id}: GoalItem) {
    const dispatch = useGoalDispatch();
    function handleRemoveGoal() {
        dispatch(removeGoal(id))
      }
  return <>
    <h1>{description}</h1>
    <p>{date}</p>
    <p>
        <Button onClick={handleRemoveGoal}>Remove Goal</Button>
    </p>
</>
}