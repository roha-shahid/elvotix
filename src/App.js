import React from 'react';

// import Header from './components/Header';
// import Hero from './components/Hero';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Green from './components/Green/Gree';
import Mission from './components/Our Mission/Mission';
import AboutSection from './components/AboutSection/AboutSection';
import KnowMore from './components/KnowMore/KnowMore';
import VoteCount from './components/VoteCount/VoteCount';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import News from './components/News/News';
import Donate from './components/Donate/Donate';
import Highlight from './components/Highlight/Highlight';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Green></Green>
      <Mission />
      <AboutSection />
      <KnowMore />
      <Highlight />
      <VoteCount />
      <Donate />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;