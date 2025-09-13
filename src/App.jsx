import { Route, Routes } from 'react-router';
import Home from './page/Home';
import Video from './page/Video';
import About from './page/About';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/video/:id' element={<Video />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}
