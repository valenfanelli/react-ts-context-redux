import TimersView from './components/timers/TimersView.tsx';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GoalsView from './components/context/GoalsView.tsx';
import GoalsViewRedux from './components/redux/GoalsViewRedux.tsx';
import { NavBar } from './components/UI/NavBar.tsx';
import Home from './components/Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation(); // Gets the current route

  return (
    <>
      {/* NavBar up if we're not in "/" */}
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timers" element={<TimersView />} />
        <Route path="/context" element={<GoalsView />} />
        <Route path="/redux" element={<GoalsViewRedux />} />
      </Routes>

      {/* NavBar down if we're in "/" */}
      {location.pathname === "/" && <NavBar />}
    </>
  );
}

export default App;
