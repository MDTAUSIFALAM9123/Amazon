
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Homepages';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}