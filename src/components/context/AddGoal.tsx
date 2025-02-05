import { useRef } from 'react';

import Button from '../UI/Button.tsx';
import Form, { FormHandle } from '../UI/Form.tsx';
import Input from '../UI/Input.tsx';
import { useGoalsContext, Goal } from '../../store/goals-store.tsx';

export default function AddGoal() {
  const form = useRef<FormHandle>(null);
  const {addGoal} = useGoalsContext()
  function handleSaveGoal(data: unknown) {
    const extractedData = data as { description: string; date: string };
    console.log(extractedData);
    const newGoal: Goal = {
        ...extractedData,
        id: Date.now(), // Generate a unique ID based on the actual date
      };
    addGoal(newGoal);
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
