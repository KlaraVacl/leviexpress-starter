import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
