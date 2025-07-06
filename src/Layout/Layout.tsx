import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-4 lg:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;