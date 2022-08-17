import { Home, About, Contact, Portfolio, Resume } from './pages/index';
import Navigation from './global/components/Navigation';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Home />
      <About />
      <Contact />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
