import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdFormats from './components/AdFormats';
import BannerAd from './components/BannerAd';
import Home from './components/Home';
import Native from './components/Native';
import PopUnder from './components/PopUnder';

function App() {
  return (
    <div className='bg-neutral'>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<PopUnder></PopUnder>}></Route>
          <Route path='bannerAd' element={<BannerAd></BannerAd>}></Route>
          <Route path='native' element={<Native></Native>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
