import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import AddGoalRedux from './AddGoalRedux.tsx';
import GoalListRedux from './GoalListRedux.tsx';
export default function GoalsViewRedux() {
  return <>
    <Provider store={store}>
        <h1 className="title">Goals con Redux</h1>
        <main>
            <AddGoalRedux/>
            <GoalListRedux/>
        </main>
    </Provider>
    </>
}
