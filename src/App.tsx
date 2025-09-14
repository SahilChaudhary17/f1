import './App.css';

import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.bundle'

import Navbar from './components/Navbar';

import Schedule from './components/Schedule';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 

function App() {

  return (

    <div className="App">

      {/* <Navbar/>

      <Home/>

      <hr/>

      <br/>

      <GetInTouch/> */}

      <Router>

        <Navbar/>

        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/about' element={<Home/>}/>

          {/* <Route path='/drivers' element={<Drivers/>}/> */}

          <Route path='/schedule' element={<Schedule/>}/>

          {/* <Route path='/get-in-touch' element={<GetInTouch/>}/> */}

          {/* <Route path='/light-swtich' element={<LightSwitch/>}/> */}

        </Routes>

      </Router>

    </div>

  );

}

export default App;