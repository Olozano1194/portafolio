import { Link } from 'react-scroll';
//import SobreMi from "./Redes";
import logo from '../assets/logoOscar1.jpeg';


function Navbar() {  //1094
    return (
        <>
            <div className='lg:flex lg:items-center lg:gap-2 lg:w-8/12 lg:p-3'>
                <img
                className='logo rounded-lg size-9' 
                src={logo}
                alt='logo' />

                <h2 className='title flex justify-center items-center text-stone-50 font-bold hover:text-slate-300 cursor-pointer md:text-[1.2rem]'>Oscar Eduardo Lozano Bocanegra</h2>
            </div>
            
            <nav className='menu flex items-center justify-center gap-2 text-stone-50 md:gap-4 lg:justify-end lg:w-full'>
                <Link to='skill' smooth={true} duration={500} className='linkNav text-[0.78rem] md:text-[1.3rem] md:pl-3 lg:text-[1.1rem]' >Sobre Mi</Link>
                <Link to='skill' smooth={true} duration={500} className='linkNav text-[0.78rem] md:text-[1.3rem] lg:text-[1.1rem]' >Skills</Link>
                <Link to='softSkill' smooth={true} duration={500} className='linkNav text-[0.78rem] md:text-[1.3rem] lg:text-[1.1rem]' >Soft Skill</Link>
                <Link to='hobbies' smooth={true} duration={500} className='linkNav text-[0.78rem] md:text-[1.3rem] lg:text-[1.1rem]'>Hobbies</Link>
                <Link to='formacionAcademica' smooth={true} duration={500} className='linkNav text-[0.78rem] md:text-[1.1rem] lg:text-[1.2rem]' >Formación</Link>
                <Link to='proyectos' smooth={true} duration={500} className='linkNav text-[0.78rem] md:text-[1.3rem] lg:text-[1.1rem]' >Proyectos</Link>
                <Link to='contacto' smooth={true} duration={500} className='linkNav text-[0.78rem] md:text-[1.3rem] lg:text-[1.1rem] lg:pr-2 ' >Contacto</Link>
                        
            </nav>
        </>
        
    );
    
}
export default Navbar;