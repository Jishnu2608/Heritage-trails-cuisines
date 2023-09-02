import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentCuisines from "./components/Content/content-cuisines";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentCuisines/>
      <Footer/>
    </div>
  );
}

export default App;
