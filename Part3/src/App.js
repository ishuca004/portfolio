import React from 'react';
import './styles.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
