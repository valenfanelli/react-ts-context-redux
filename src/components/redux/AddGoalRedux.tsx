import { useRef } from 'react';

import Button from '../UI/Button.tsx';
import Form, { FormHandle } from '../UI/Form.tsx';
import Input from '../UI/Input.tsx';
import { useGoalDispatch } from '../../store/hooks.ts';
import { addGoal } from '../../store/goal-slice.ts';

export default function AddGoalRedux() {
  const form = useRef<FormHandle>(null);
  const dispatch = useGoalDispatch();
  function handleSaveGoal(data: unknown) {
    const extractedData = data as { description: string; date: string };
    console.log(extractedData)
    dispatch(addGoal(extractedData));
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveGoal} id="add-goal">
      <Input type="text" label="Description" id="description" />
      <Input type="number" label="Date" id="date" />
      <p>
        <Button>Add Goal</Button>
      </p>
    </Form>
  );
}
