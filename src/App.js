import './App.css';
import MainComponent from './components/Body/MainBodyComponent';
import HeaderComponent from './components/Header/Header';

function App() {
  return (<div className="main">
    <HeaderComponent />
    <MainComponent/>
  </div>);
}

export default App;
