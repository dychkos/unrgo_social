import React from 'react';
import Content from './components/content/Home';
import Header from './components/header/Header'

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/content/Home'



function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
