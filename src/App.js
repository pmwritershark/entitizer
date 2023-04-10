
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Table from "./components/Table";
//import Background from './Background';

function App() {
  return (
    <div className="App">
    //  <Background/>
      <Navbar/>
      <Table/>
      <Footer/>
    </div>
  );
}

export default App;
