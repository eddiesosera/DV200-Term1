import './App.css'
import SideBar from './components/navbar/sideBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Compare from './pages/compare';
import Timeline from './pages/timeline';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#F3F3F3', height:'100vh', padding:'15px' }}>
      <div style={{zIndex: 2}}>
        <SideBar />
      </div>
      <div style={{ overflowY:'scroll', overflowX:'hidden', marginLeft: 'calc(190px + 2vw)', backgroundColor: 'white', padding:'20px', borderRadius:'10px', width:'90%' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/timeline' element={<Timeline />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
