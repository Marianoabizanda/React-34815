
import './App.css';
// importamos componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer text="Mis Productos"/>
      </header>
    </div>
  );
}



export default App;
