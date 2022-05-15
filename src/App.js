import './App.css';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';
import SwatchDesigner from './components/SwatchDesigner/SwatchDesigner';

function App() {
  const activeColors = [
    {
      hue: 50,
      sat: 50,
      val: 50
    },
    {
      hue: 50,
      sat: 50,
      val: 50
    },
    {
      hue: 50,
      sat: 50,
      val: 50
    },
    {
      hue: 50,
      sat: 50,
      val: 50
    },
    {
      hue: 50,
      sat: 50,
      val: 50
    },
    {
      hue: 50,
      sat: 50,
      val: 50
    },
    {
      hue: 50,
      sat: 50,
      val: 50
    },
    {
      hue: 50,
      sat: 50,
      val: 50
    },
    {
      hue: 50,
      sat: 50,
      val: 50
    },
  ];
  return (
    <div className="App">
      <ColorDisplay activeColors={activeColors} />
      <SwatchDesigner />
    </div>
  );
}

export default App;
