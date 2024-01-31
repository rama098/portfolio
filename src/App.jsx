import {Route,Routes} from 'react-router-dom';
import Home from './allLink/home';
import About from './allLink/about';
import Projects from './allLink/projects';
import ContactForm from './allLink/contact';
import Navbar from './component/navBar';
import Resume from './allLink/resume';
import Skills from './allLink/skills';
import './App.css'
import ContactMe from './allLink/contactme';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path='/resume'element={<Resume/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects'element={<Projects/>}></Route>
        <Route path='/contact'element={<ContactForm/>}></Route>
        <Route path='/contactme' element={<ContactMe/>}></Route>
      </Routes>
    </div>
  );
}

