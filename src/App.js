import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import ClockList from './components/ClockList'
import Form from './components/Form';
function App() {

  const quantities = [1,2,3]

  return (
    <div>
      {/* <Clock locale="bn-BD">Now, Time is </Clock> */}
      {/* <ClockList quantities = {quantities} /> */}
      <Form/>
    </div>
  );
}

export default App;
