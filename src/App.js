
import '../src/asset/css/custom.css';


import "slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css";
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
  <>
  <BrowserRouter>
  <AppRouter/>
  </BrowserRouter>
  </>
  );
}

export default App;
