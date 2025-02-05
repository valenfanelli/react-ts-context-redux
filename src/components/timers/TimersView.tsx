import AddTimer from './AddTimer.tsx';
import Header from './Header.tsx';
import Timers from './Timers.tsx';
import TimersContextProvider from '../../store/timers-context.tsx';
export default function TimersView() {
  
  return <>
    <TimersContextProvider>
          <Header />
          <main> 
            <AddTimer />
            <Timers />
          </main>
    </TimersContextProvider>
</>
}
