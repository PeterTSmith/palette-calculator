import './App.css';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';

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
    </div>
  );
}

export default App;
