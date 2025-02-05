import GoalsContextProvider from '../../store/goals-store.tsx';
import AddGoal from './AddGoal.tsx';
import GoalList from './GoalList.tsx';
export default function GoalsView() {
  
  return <>
    <GoalsContextProvider>
      <h1 className="title">Goals con useReducer y context API</h1>
      <main>
        <AddGoal/>
        <GoalList/>
      </main>
    </GoalsContextProvider>
</>
}
