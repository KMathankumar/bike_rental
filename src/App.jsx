import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { CommissionProvider } from './components/CommissionSettings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to include this

const App = () => {
  return (
    <BrowserRouter>
      <CommissionProvider>
        <AppRoutes />
        <ToastContainer />
      </CommissionProvider>
    </BrowserRouter>
  );
};

export default App;
