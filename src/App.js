import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Headers from './components/Headers'
import {useRoutes} from 'react-router-dom'
import {routes} from './routes'
function App() {
  const appRoute=useRoutes(routes)
  return (
    <div className="App">
      <Headers/>
      {appRoute}

    </div>
  );
}

export default App;
