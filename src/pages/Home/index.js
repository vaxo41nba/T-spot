import React from 'react';

import Header from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import './styles.css';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
