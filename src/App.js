import './App.css';
import Device from './components/Device/Device';
import DeviceDetails from './components/DeviceDetails/DeviceDetails';
import Watch from './components/Watch/Watch';

function App() {

  return (
    <div className="App">
      <Device name="Anas Bin Sayed"></Device>
      <DeviceDetails price="15000"></DeviceDetails>
      <Watch></Watch>
    </div>
  );
}

export default App;
