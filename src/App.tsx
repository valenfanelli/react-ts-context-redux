import TimersView from './components/timers/TimersView.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoalsView from './components/context/GoalsView.tsx';
import GoalsViewRedux from './components/redux/GoalsViewRedux.tsx';
import { NavBar } from './components/UI/NavBar.tsx';

function App() {
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/timers' element={<TimersView/>}></Route>
          <Route path='/context' element={<GoalsView/>}></Route>
          <Route path='/redux' element={<GoalsViewRedux/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
