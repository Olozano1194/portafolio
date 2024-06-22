import { Link } from 'react-scroll';
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
                <Link to='sobreMi' smooth={true} duration={500} >Sobre mi</Link>
                <Link to='skill' smooth={true} duration={500} >Skills</Link>
                <Link to='softSkill' smooth={true} duration={500} >Soft Skill</Link>
                <Link to='hobbies' smooth={true} duration={500} >Hobbies</Link>
                <Link to='formacionAcademica' smooth={true} duration={500} >Formación</Link>
                <Link to='proyectos' smooth={true} duration={500} >Proyectos</Link>
                <Link to='contacto' smooth={true} duration={500} >Contacto</Link>
                        
            </nav>
        </>
        
    );
    
}
export default Navbar;