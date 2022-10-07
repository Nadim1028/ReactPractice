import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div>
      <Clock locale="bn-BD">Now, Time is </Clock>
    </div>
  );
}

export default App;
