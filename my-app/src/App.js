import React from 'react';
import './App.css';
import About from "./componets/about/about"
import Header from "./componets/header/header"
import Call from "./componets/callToAction/callToAction"
import Portfolio from "./componets/portfolio/portfolio"
import Footer from "./componets/footer/footer"

function App() {
  return (
    <div className="App">
     <Header/>
     <About />
     <Call />
     <Portfolio />
     <Footer />
    </div>
  );
}

export default App;
