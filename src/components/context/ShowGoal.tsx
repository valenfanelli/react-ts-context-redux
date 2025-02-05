import { Goal, useGoalsContext } from "../../store/goals-store";
import Button from "../UI/Button";

export default function ShowGoal({description, date, id}: Goal) {
    const {removeGoal} = useGoalsContext();
    function handleRemoveGoal() {
        removeGoal(id);
      }
  return <>
    <h1>{description}</h1>
    <p>{date}</p>
    <p>
        <Button onClick={handleRemoveGoal}>Remove Goal</Button>
    </p>
</>
}
