import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
