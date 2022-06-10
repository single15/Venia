import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './style/index.scss';


function App(props) {
  return (
    <div className="container">
      <article>
        <Header />
        {props.children}
        <Footer />
      </article>
    </div>
  );
}

export default App;
