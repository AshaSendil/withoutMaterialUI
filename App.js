import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
