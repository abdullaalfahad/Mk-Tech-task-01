import './App.css';
import Advertisers from './components/Advertisers';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-neutral'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Advertisers></Advertisers>

    </div>
  );
}

export default App;
