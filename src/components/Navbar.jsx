import {Link} from 'react-router-dom';
import SobreMi from "./Redes";
import logo from '../assets/img/logoOscar1.jpeg';


function Navbar() {
    return (
        <>
            <div className='flex gap-2'>
                <img
                className='rounded-md' 
                src={logo}
                alt='logo' />

                <h2 className='title text-stone-50 font-bold hover:text-slate-300 cursor-pointer'>Oscar Eduardo Lozano Bocanegra</h2>
            </div>
            
            <nav className='flex gap-3 text-stone-50'>
                <Link to={'../components/SobreMi.jsx'} >Sobre mi</Link>
                <Link to='/skill' >Skills</Link>
                <Link to='/softSkill' >Soft Skill</Link>
                <Link to='/hobbies' >Hobbies</Link>
                <Link to='/formacion' >Formación</Link>
                <Link to='/proyectos' >Proyectos</Link>
                <Link to='/contacto' >Contacto</Link>
                        
            </nav>
        </>
        
    );
    
}
export default Navbar;