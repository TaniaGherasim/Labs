import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { MenuList } from './components/MenuList';
import { Header } from './components/Header';
import OrderContextProvider from './context/OrderContextProvider';

function App() {
  return (
    <div className="App">
      <OrderContextProvider>
      <Header />
      <MenuList />
      <Sidebar />
      </OrderContextProvider>
    </div>
  );
}

export default App;
