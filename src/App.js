import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

// import { List } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
