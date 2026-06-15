import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KindaShopee from './pages/KindaShopee';
import Resume from './pages/Resume';
import ScrollToHash from './components/ScrollToHash';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/kinda-shopee" element={<KindaShopee />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}
