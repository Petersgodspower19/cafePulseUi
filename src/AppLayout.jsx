import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideNav';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Reviews from './components/Reviews';
import Products from './components/Products';
import Footer from './components/Footer';

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  
  const openSidebar = () => {
    setScrollPosition(window.scrollY);
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      window.scrollTo(0, scrollPosition);
    }
  }, [isSidebarOpen, scrollPosition]);

  return (
    <div>
      {isSidebarOpen ? (
        <SideBar onClose={closeSidebar} />
      ) : (
        <>
          <Header onMenuClick={openSidebar} />
          <main>
            <Home />
            <Menu />
            <About />
            <Products />
            <Reviews />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default AppLayout;
