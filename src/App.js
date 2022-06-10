import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
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
