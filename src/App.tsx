import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Первая карточка с изображением */}
      <Card
        image="https://via.placeholder.com/150"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonText="Go somewhere"
        showImagePlaceholder={true}
      />

      {/* Вторая карточка без изображения */}
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
        buttonText="Go somewhere"
      />
    </div>
  );
}

export default App;