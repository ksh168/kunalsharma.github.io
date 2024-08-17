import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import { navigationLinks } from './config/navigation';
import ScrollButton from './pages/scrollButton';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {navigationLinks.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <ScrollButton />
    </Router>
  );
}

export default App;