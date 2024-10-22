import ListaNomes from './components/ListaNomes'
import './App.css'

const App = () => {
  const nomes = ['Anna', 'Kaiser', 'Jailson', 'Matheus'];

  return (
    <div>
      <h1>Lista de Nomes</h1>
      <ListaNomes nomes={nomes} />
    </div>
  );
};

export default App;

