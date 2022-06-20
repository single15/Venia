import React from 'react';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './style/index.scss';


function App(props) {
  return (
    <main>
      <div className="container">
          <Header />
          {props.children}
          <Footer />
      </div>
    </main>
  );
}

export default App;
