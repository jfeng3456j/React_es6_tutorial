import './App.css';
import Card from './Components/Card';
function App() {
  return (
    <div className="App">
      <Card name='John Doe' title='Manager' />
      <Card name='James Doe' title='Product Owner' />
      <Card name='Jake Doe' title='Engineer' />
    </div>
  );
}

export default App;
