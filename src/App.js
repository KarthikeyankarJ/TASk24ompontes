import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Components from './Components/Components';
import Home from './Components/Home'
import Dashboad from './Components/Dashboad';
import Uitlity from './Components/Uitlity';
import Page from './Components/Page';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Company from './Components/Company';
import Overview from './Components/Overview';
import Contact from './Components/Contact';
import About from './Components/About';
function App() {
  return (
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/overview' element={<Overview/>}/>
        <Route path="/components" element={<Components/>} />
        <Route path="/home" element={<Home />} />
        <Route exact path='/' element={<Dashboad/>} />
        <Route path="/Utilities" element={<Uitlity/>}/> 
        <Route path='/page' element={<Page/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/company' element={<Company/>}/>
      </Routes>
  );
}

export default App;
