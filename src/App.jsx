import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import VendorRoutes from './Components/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <VendorRoutes />
    </BrowserRouter>
  );
};

export default App;
