import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar()
{
    return(
         <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/Projects'>Projects</Link>
            </li>
            <li>
                <Link to='/skills'>Skills</Link>
            </li>
           
            <li>
                <Link to='/Resume'>Resume</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Info</Link>
            </li>
            <li>
                <Link to='contactme'>Contact Me</Link>
            </li>
         </ul>
    );
}