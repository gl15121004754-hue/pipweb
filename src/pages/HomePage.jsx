import React from 'react';
import Header from '../components/Header';
import Creations from '../components/Creations';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="container">
      <Header />
      <Creations />
      <Footer />
    </div>
  );
}

export default HomePage;
