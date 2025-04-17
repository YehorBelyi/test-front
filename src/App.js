import './App.css';
import MainComponent from './components/Body/MainBodyComponent';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Body/Footer/Footer';

function App() {
  return (<div className="main">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>);
}

export default App;
