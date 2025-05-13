import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { CommissionProvider } from './components/CommissionContext';  // Correct import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Include toast styles

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
