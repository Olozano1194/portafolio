import { Link } from 'react-scroll';
//import SobreMi from "./Redes";
import logo from '../assets/logoOscar1.jpeg';


function Navbar() {  //1094
    return (
        <>
            <div className='flex items-center pl-4 gap-2 lg:w-8/12 md:p-3'>
                <img
                className='logo rounded-lg size-9' 
                src={logo}
                alt='logo' />

                <h2 className='title flex justify-center items-center text-stone-50 font-bold hover:text-slate-300 cursor-pointer md:text-[1.2rem]'>Oscar Eduardo Lozano Bocanegra</h2>
            </div>
            
            <nav className='menu flex items-center justify-center gap-2 text-stone-50 md:gap-4 lg:justify-end lg:w-full'>
                <Link to='skill' smooth={true} duration={500} className='linkNav text-[0.8rem] md:text-[1.5rem] md:pl-5 lg:text-[1.2rem]' >Sobre Mi</Link>
                <Link to='skill' smooth={true} duration={500} className='linkNav text-[0.8rem] md:text-[1.5rem] lg:text-[1.2rem]' >Skills</Link>
                <Link to='softSkill' smooth={true} duration={500} className='linkNav text-[0.8rem] md:text-[1.5rem] lg:text-[1.2rem]' >Soft Skill</Link>
                <Link to='hobbies' smooth={true} duration={500} className='linkNav text-[0.8rem] md:text-[1.5rem] lg:text-[1.2rem]'>Hobbies</Link>
                <Link to='formacionAcademica' smooth={true} duration={500} className='linkNav text-[0.8rem] md:text-[1.5rem] lg:text-[1.2rem]' >Formación</Link>
                <Link to='proyectos' smooth={true} duration={500} className='linkNav text-[0.8rem] md:text-[1.5rem] lg:text-[1.2rem]' >Proyectos</Link>
                <Link to='contacto' smooth={true} duration={500} className='linkNav text-[0.8rem] md:text-[1.5rem] lg:text-[1.2rem] lg:pr-3 ' >Contacto</Link>
                        
            </nav>
        </>
        
    );
    
}
export default Navbar;